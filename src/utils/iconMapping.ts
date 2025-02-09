import { FaGithub, FaLinkedin, FaGitlab} from 'react-icons/fa'
import LEO from '../../public/leo.jpg'
import {ComponentType} from 'react'
import {StaticImageData} from 'next/image'

const iconMappings: { [key: string]: ComponentType } = {
    'github': FaGithub,
    'linkedin': FaLinkedin,
    'gitlab': FaGitlab,
}

const imageMappings: { [key: string]: StaticImageData } = {
    'leo': LEO,
}

const getIcon = (iconName: string): ComponentType => {
    const icon = iconMappings[iconName]
    if (!icon) {
        throw new Error(`Icon ${iconName} not found`)
    }
    return icon
}

const getImage = (imageName: string): StaticImageData => {
    const image = imageMappings[imageName]
    if (!image) {
        throw new Error(`Image ${imageName} not found`)
    }
    return image
}

export {getIcon, getImage}
