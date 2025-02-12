import { z } from 'zod'
import { mediaSchema } from './Media'
import {resourceSchema} from './resource'

export const allSkillSchema = resourceSchema.extend({
    name: z.string(),
    image: mediaSchema,
    href: z.string(),
    whiteIcon: z.boolean().optional().nullable(),
    width: z.number().optional().nullable(),
})
