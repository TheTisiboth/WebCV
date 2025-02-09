import {getImage} from './iconMapping'
import {getRelativePath} from './cloudinary'
import {StaticImageData} from 'next/image'

export const getImageUrl = (name?: string, url?: string, isProduction?: boolean): StaticImageData | string => {
    if (name) {
        return getImage(name)
    }
    if (isProduction && url) {
        return getRelativePath(url)
    }
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
}
