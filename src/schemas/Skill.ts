import { z } from 'zod'

import { allSkillSchema } from './AllSkill'
import {resourceSchema} from './resource'

export const skillSchema = resourceSchema.extend({
    system: z.array(allSkillSchema),
    software: z.array(allSkillSchema),
    web: z.array(allSkillSchema),
    other: z.array(allSkillSchema),
}).strict()
