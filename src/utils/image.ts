import {getImage} from './iconMapping'
import {getRelativePath} from './cloudinary'
import {StaticImageData} from 'next/image'
import {env} from './env'

export const getImageUrl = (name?: string, url?: string, isProduction?: boolean): StaticImageData | string => {
    if (name) {
        return getImage(name)
    }
    if (isProduction && url) {
        return getRelativePath(url)
    }
    return `${env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
}
