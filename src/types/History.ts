import { Picture } from './components/Picture'
import { Media } from './Media'

export interface History {
  documentId: number
    title: string
    description: string
    type?: 'job' | 'education'
    link?: string
    picture?: Media
    dates: Picture
    locale: string
    localizations?: History[]
}
