// Generated based on Strapi inner types. Please do not modify.
import { MediaFormat } from './MediaFormat'

export interface Media {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: { thumbnail: MediaFormat; medium: MediaFormat; small: MediaFormat }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string
    provider: string
    createdAt: Date
    updatedAt: Date
}
