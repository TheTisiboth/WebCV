import { z } from 'zod'
import {resourceSchema} from '../resource'

export const codeRepositorySchema = resourceSchema.extend({
    name: z.union([z.literal('github'), z.literal('gitlab')]),
    link: z.string(),
}).strict()
