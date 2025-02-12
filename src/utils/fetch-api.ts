import {StrapiRoute} from '../types/generated/routes/StrapiRoute'
import {env} from './env'
import {projectSchema} from '../schemas/Project'
import {skillSchema} from '../schemas/Skill'
import {citySchema} from '../schemas/City'
import {cvSchema} from '../schemas/Cv'
import {historySchema} from '../schemas/History'

const populateFields: Record<string, string[]> = {
    projects: ['picture', 'codeRepository', 'skills.image'],
    skill: ['web.image', 'system.image', 'software.image', 'other.image']
}

type SchemaMap = {
    projects: typeof projectSchema,
    skill: typeof skillSchema,
    cities: typeof citySchema,
    cvs: typeof cvSchema,
    histories: typeof historySchema
}

const schemaMap: SchemaMap = {
    projects: projectSchema,
    skill: skillSchema,
    cities: citySchema,
    cvs: cvSchema,
    histories: historySchema
} as const

type FetchApiProps = {
    resource: StrapiRoute;
    isLocalized?: boolean;
    locale?: string;
    sort?: string;
}

async function fetchAPI<T>({resource, isLocalized = true, locale = 'en', sort}: FetchApiProps): Promise<T> {
    const url = buildUrl(resource, isLocalized, locale, sort)
    const data = await fetchData<unknown>(url) // Use `unknown` to enforce validation
    return validateData<T>(resource, data)
}

/*
 * Build the URL for the API request
 * We need to populate some fields manually, because otherwise strapi hide those fields from the API response, like media,components and relations.
 * By default we can use the 'populate=*' to get all fields, but in some cases we need to specify the fields to populate; if the nesting level is more than 1
 *
 * @param resource - The resource to fetch, ie 'projects' or 'cities'
 * @param isLocalized - Whether to fetch localized data or not
 * @param locale - The locale to fetch data for. Only used if isLocalized is true. Default is 'en'
 * @param sort - The field to sort by, ie 'order'. Sorting is done in ascending order
 */
function buildUrl(resource: StrapiRoute, isLocalized: boolean, locale: string, sort?: string): URL {
    const params = new URLSearchParams({...(sort && { sort: `${sort}:asc` }),...(isLocalized && {locale})})

    const fieldsToPopulate = populateFields[resource]
    if (fieldsToPopulate) {
        fieldsToPopulate.forEach((field, index) => params.append(`populate[${index}]`, field))
    } else {
        params.append('populate', '*')
    }

    return new URL(`${env.NEXT_PUBLIC_STRAPI_API_URL}/api/${resource}?${params}`)
}

async function fetchData<T>(url: URL): Promise<T> {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
    })

    if (!response.ok) {
        console.error(await response.text())
        throw new Error(`Failed to fetch data from Strapi (url=${url}, status=${response.status}), error: ${response.statusText}`)
    }

    return (await response.json()).data
}

/*
 * Validate the data fetched from the API, with zod schemas.
 * We fetch the correct schema from the schemaMap, based on the resource.
 */
function validateData<T>(resource: keyof SchemaMap, data: unknown): T {
    const schema = schemaMap[resource]
    if (!schema) throw new Error(`No schema found for resource: ${resource}`)

    const validatedData = schema.safeParse(data)
    if (!validatedData.success) {
        throw new Error(`Failed to validate data for resource: ${resource}. 
        You should check in the back office, if you don't have missing required data. 
        \nZod error: ${JSON.stringify(validatedData.error.errors)}`)
    }

    return validatedData.data as T
}
export {fetchAPI}
