export async function fetchAPI<T>(resource = '', locale = 'en') {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
    const options: RequestInit = {headers: {Authorization: `Bearer ${token}`}, cache: 'force-cache' as RequestCache}
    const params = new URLSearchParams({populate: '*', locale, 'sort': 'id:asc'})

    const url = new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${resource}?${params}`)

    const response = await fetch(url, options)
    if (!response.ok) {
        console.log(await response.text())
        throw new Error(`Failed to fetch data from Strapi (url=${url}, status=${response.status})`)
    }
    return (await response.json()).data as T
}
