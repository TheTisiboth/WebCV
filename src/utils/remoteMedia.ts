import {env} from './env'

export const resolveRemoteMediaURL = (url: string): string =>
    env.IS_PRODUCTION ?
        url :
        `${env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
