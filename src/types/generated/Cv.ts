import {Media} from './Media'

export interface Cv {
    id: number
    cv: Media
    cv_locale: 'fr' | 'en' | 'de'
}
