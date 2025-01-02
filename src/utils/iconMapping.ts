import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { AiOutlineGitlab } from 'react-icons/ai'
import C from '../../public/c.png'
import ARM from '../../public/arm2.png'
import ARDUINO from '../../public/arduino.svg'
import JAVA from '../../public/java.png'
import PYTHON from '../../public/python.png'
import OCAML from '../../public/ocaml.jpg'
import REACT from '../../public/react.svg'
import MUI from '../../public/mui.png'
import BOOTSTRAP from '../../public/bootstrap.png'
import ANGULAR from '../../public/angular.png'
import MONGODB from '../../public/mongodb.png'
import JQUERY from '../../public/jquery.png'
import PHP from '../../public/php.png'
import SQL from '../../public/sql.png'
import GIT from '../../public/git.png'
import LINUX from '../../public/linux.svg'
import NODE from '../../public/node.png'
import JHIPSTER from '../../public/jhipster.png'
import SPRING from '../../public/spring.png'
import POSTGRES from '../../public/postgres.webp'
import HTML from '../../public/html.png'
import CSS from '../../public/css.png'
import LEO from '../../public/leo.jpg'
import {ComponentType} from 'react'
import {StaticImageData} from 'next/image'

const iconMappings: { [key: string]: ComponentType } = {
    'github': FaGithub,
    'linkedin': FaLinkedin,
    'gitlab': AiOutlineGitlab,
    // Add more mappings as needed
}

const imageMappings: { [key: string]: StaticImageData } = {
    'angular': ANGULAR,
    'c': C,
    'arm': ARM,
    'arduino': ARDUINO,
    'java': JAVA,
    'python': PYTHON,
    'ocaml': OCAML,
    'react': REACT,
    'mui': MUI,
    'bootstrap': BOOTSTRAP,
    'mongodb': MONGODB,
    'jquery': JQUERY,
    'php': PHP,
    'sql': SQL,
    'git': GIT,
    'linux': LINUX,
    'node': NODE,
    'jhipster': JHIPSTER,
    'spring': SPRING,
    'leo': LEO,
    'postgres': POSTGRES,
    'html': HTML,
    'css': CSS
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
