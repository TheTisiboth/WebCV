import {StrapiRoute} from '../types/generated/routes/StrapiRoute'
import {env} from './env'
import {projectSchema} from '../schemas/Project'
import {skillSchema} from '../schemas/Skill'
import {citySchema} from '../schemas/City'
import {cvSchema} from '../schemas/Cv'
import {historySchema} from '../schemas/History'

type FetchApiProps = {
    resource: StrapiRoute;
    isLocalized?: boolean;
    locale?: string;
};

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


async function fetchAPI<T>({ resource, isLocalized = true, locale = 'en' }: FetchApiProps): Promise<T> {
    const url = buildUrl(resource, isLocalized, locale)
    const data = await fetchData<unknown>(url) // Use `unknown` to enforce validation
    return validateData<T>(resource, data)
}

function buildUrl(resource: StrapiRoute, isLocalized: boolean, locale: string): URL {
    const params = new URLSearchParams({'sort': 'id:asc', ...(isLocalized && {locale})})

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
