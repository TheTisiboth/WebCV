import { type IconType } from 'react-icons'
import { LatLngLiteral } from 'leaflet'

export type Project = {
  image: string
  title: string
  body: string
  skills: string[]
  repository: {
    Icon: IconType
    href: string
  }
}

export type HistoryPicture = {
  historyItemId: number
  icon: string,
  url?: string,
  width: number,
  height: number,
  name: string
}

export type HistoryItem = {
  id: number,
  date: string,
  title: string,
  body: string,
  job: boolean
}

export type SkillImage = {
  image: string
  href: string
  tooltip: string
  class?: string
  size?: number
}

export type SkillInfos = {
  title: string
  skills: SkillImage[]
}

export type Position = {
  latlng: LatLngLiteral;
  tooltip: string | string[];
}
