// Generated based on Strapi inner types. Please do not modify.
import { AllSkill } from './AllSkill'
import { CodeRepository } from './components/CodeRepository'
import { Media } from './Media'

export interface Project {
    id: number
    title: string
    description: string
    picture: Media
    codeRepository: CodeRepository
    year: string
    duration: number
    skills: AllSkill[]
    order: number
    locale: string
    localizations?: Project[]
}
