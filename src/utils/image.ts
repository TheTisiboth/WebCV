import {getImage} from './iconMapping'
import {StaticImageData} from 'next/image'

export const getImageUrlByName = (name: string): StaticImageData => {
    return getImage(name)
}
