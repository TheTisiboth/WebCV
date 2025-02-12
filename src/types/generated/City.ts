// Generated based on Strapi inner types. Please do not modify.
import { Coordinate } from './components/Coordinate'

export interface City {
    id: number
    name: string
    coordinate: Coordinate
    locale: string
    localizations?: City[]
}
