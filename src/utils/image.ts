import {getImage} from './iconMapping'
import {StaticImageData} from 'next/image'
import {env} from './env'

export const getImageUrlByName = (name: string): StaticImageData => {
    return getImage(name)
}

export const resolveImageUrl = (url: string, isProduction: boolean): string =>
    isProduction ?
        url :
        `${env.NEXT_PUBLIC_STRAPI_API_URL}${url}`

