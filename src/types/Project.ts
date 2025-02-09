import { AllSkill } from './AllSkill'
import { CodeRepository } from './components/CodeRepository'
import { Media } from './Media'

export interface Project {
  documentId: number
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
