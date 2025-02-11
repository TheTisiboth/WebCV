import {Coordinate} from './components/Coordinate'

export interface City {
    id: number
    name: string
    coordinate: Coordinate
    locale: string
    localizations?: City[]
}
