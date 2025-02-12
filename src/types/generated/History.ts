// Generated based on Strapi inner types. Please do not modify.
import { Picture } from './components/Picture'
import { Media } from './Media'

export interface History {
    id: number
    title: string
    description: string
    type?: 'job' | 'education'
    link?: string
    picture: Media
    dates: Picture
    order: number
    locale: string
    localizations?: History[]
}
