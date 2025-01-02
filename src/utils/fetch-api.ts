export async function fetchAPI(resource = '', locale = 'en') {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
    const options = {headers: {Authorization: `Bearer ${token}`}}
    const params = new URLSearchParams({populate: '*', locale})

    const url = new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${resource}?${params}`)

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Strapi (url=${url}, status=${response.status})`)
        }
        return (await response.json()).data
    } catch (error) {
        console.error(error)
        throw error
    }
}
