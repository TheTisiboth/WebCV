import { Coordinate } from './components/Coordinate'

export interface City {
  documentId: number
    name: string
    coordinate: Coordinate
    locale: string
    localizations?: City[]
}
