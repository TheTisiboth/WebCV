import {StaticImageData} from 'next/image'

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
