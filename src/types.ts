import { type IconType } from 'react-icons'
import { LatLngLiteral } from 'leaflet'
import {StaticImageData} from 'next/image'

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
  icon: string | StaticImageData,
  url?: string,
  width: number,
  height: number,
  name: string
}

export type HistoryItem = {
  id: number,
  job: boolean
}

export type SkillImage = {
  image: string
  href: string
  tooltip: string
  class?: string
  width?: number
  height?: number
}

export type SkillInfos = {
  title: string
  skills: SkillImage[]
}

export type Position = {
  latlng: LatLngLiteral;
  tooltip: string | string[];
}

export type MySkill = {
  name: string
  image:{
    url: string
  }
  href: string
  whiteIcon?: boolean
  width?: number
  height?: number
}

export type MySkills = {
    system: MySkill[]
    software: MySkill[]
    web: MySkill[]
    other: MySkill[]
}
