import {getImage} from './iconMapping'
import {StaticImageData} from 'next/image'
import {env} from './env'

export const getImageUrl = (name?: string, url?: string, isProduction?: boolean): StaticImageData | string => {
    if (name) {
        return getImage(name)
    }
    if (isProduction && url) {
        return url
    }
    return `${env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
}
