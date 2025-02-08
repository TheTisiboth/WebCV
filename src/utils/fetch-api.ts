type FetchApiProps = {
    resource: string
    isLocalized?: boolean
    locale?: string
}

export async function fetchAPI<T>({resource = '', isLocalized = true, locale = 'en'} : FetchApiProps): Promise<T> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
    const options: RequestInit = {headers: {Authorization: `Bearer ${token}`}, cache: 'force-cache' as RequestCache}
    const params = new URLSearchParams({'sort': 'id:asc'})

    if (isLocalized) {
        params.append('locale', locale)
    }

    if (resource === 'projects'){
        params.append('populate[0]', 'picture')
        params.append('populate[1]', 'codeRepository')
        params.append('populate[2]', 'skills.image')
    }else if (resource === 'skill'){
        params.append('populate[web][populate][0]', 'image')
        params.append('populate[system][populate][0]', 'image')
        params.append('populate[software][populate][0]', 'image')
        params.append('populate[other][populate][0]', 'image')
    }else{
        params.append('populate', '*')
    }

    const url = new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${resource}?${params}`)

    const response = await fetch(url, options)
    if (!response.ok) {
        console.log(await response.text())
        throw new Error(`Failed to fetch data from Strapi (url=${url}, status=${response.status})`)
    }
    return (await response.json()).data as T
}
