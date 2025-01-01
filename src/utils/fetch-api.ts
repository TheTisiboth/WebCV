export async function fetchAPI(resource = '') {
    try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
        const options = {headers: {Authorization: `Bearer ${token}`}}
        const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${resource}?populate=*`
        const query = await fetch(url, options)
        if (!query.ok) {
            throw new Error(
                `Failed to fetch data from Strapi (url=${url}, status=${query.status})`
            )
        }
        const response= await query.json()
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
