import {Translation, validateTranslation} from '../schemas/translations'
import {Locale} from '../schemas/translations'

const locales: Locale[] = ['de', 'en', 'fr']
const translations: Record<string, Translation> = {}

locales.forEach(async (locale) => {
    const messages = (await import(`../../public/locales/${locale}/translation.json`)).default
    translations[locale] = validateTranslation(messages)
})

export const getTranslations = (locale: string) => {
    return translations[locale]
}
