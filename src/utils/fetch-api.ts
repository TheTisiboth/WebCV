import {StrapiRoute} from '../types/generated/routes/StrapiRoute'

type FetchApiProps = {
    resource: StrapiRoute
    isLocalized?: boolean
    locale?: string
}

const populateFields: Record<string, string[]> = {
    projects: ['picture', 'codeRepository', 'skills.image'],
    skill: ['web.image', 'system.image', 'software.image', 'other.image']
}

export async function fetchAPI<T>({resource, isLocalized = true, locale = 'en'} : FetchApiProps): Promise<T> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
    const params = new URLSearchParams({'sort': 'id:asc', ...(isLocalized && { locale })})

    const fieldsToPopulate = populateFields[resource]
    if (fieldsToPopulate) {
        fieldsToPopulate.forEach((field, index) => params.append(`populate[${index}]`, field))
    } else {
        params.append('populate', '*')
    }

    const url = new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${resource}?${params}`)

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) {
        console.error(await response.text())
        throw new Error(`Failed to fetch data from Strapi (url=${url}, status=${response.status})`)
    }
    return (await response.json()).data as T
}
