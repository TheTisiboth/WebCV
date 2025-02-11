import { Media } from './Media'

export interface Cv {
  documentId: number
    cv: Media
    cv_locale: 'fr' | 'en' | 'de'
}
