import {z} from 'zod'
import {allSkillSchema} from './AllSkill'
import {codeRepositorySchema} from './components/CodeRepository'
import {mediaSchema} from './Media'
import {resourceSchema} from './resource'

export const projectSchema = z.array(
    resourceSchema.extend({
        title: z.string(),
        description: z.string(),
        picture: mediaSchema,
        codeRepository: codeRepositorySchema,
        year: z.string(),
        duration: z.number(),
        skills: z.array(allSkillSchema),
        locale: z.string(),
        order: z.number()
    })
)
