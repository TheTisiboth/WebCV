
import {env} from './env'

export const getPDFUrl = (url: string, ):  string => {
    const isProduction = env.IS_PRODUCTION
    
    if (isProduction) {
        return url
    }
    
    return `${env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
}

export const handleDownload = async (url: string) => {
    try {
        const response = await fetch(url)
        const blob = await response.blob()
        const blobUrl = window.URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = blobUrl
        link.download = url.split('/').pop() as string // Extract filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Clean up blob URL
        window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
        console.error('Error downloading file:', error)
    }
}

export const getPDFTooltip = (cv_locale: string) => `cv${cv_locale.charAt(0).toUpperCase() + cv_locale.slice(1)}Tooltip`
