import {AllSkill} from './AllSkill'
import {CodeRepository} from './components/CodeRepository'
import {Media} from './Media'

export interface Project {
    id: number
    title: string
    description: string
    picture: Media
    codeRepository: CodeRepository
    year: string
    duration: number
    skills: AllSkill[]
    locale: string
    localizations?: Project[]
}
