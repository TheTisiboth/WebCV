import {getRequestConfig} from 'next-intl/server'
import {routing} from './routing'
import {getTranslations} from './translations'
import {Locale} from '../schemas/translations'

export default getRequestConfig(async ({requestLocale}) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale as Locale

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale)) {
        locale = routing.defaultLocale
    }
    
    return {
        locale,
        messages: getTranslations(locale),
    }
})
