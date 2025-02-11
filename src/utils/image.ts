import {getImage} from './iconMapping'
import {StaticImageData} from 'next/image'
import {env} from './env'

export const getImageUrlByName = (name: string): StaticImageData => {
    return getImage(name)
}

export const getImageUrlByUrl = (url: string, isProduction: boolean): string => {
    if (isProduction) {
        return url
    }
    return `${env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
}
