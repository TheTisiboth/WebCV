import {AllSkill} from './AllSkill'

export interface Skill {
    id: number
    system: AllSkill[]
    software: AllSkill[]
    web: AllSkill[]
    other: AllSkill[]
}
