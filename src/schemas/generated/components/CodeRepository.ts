// Generated by ts-to-zod
import { z } from 'zod'

export const codeRepositorySchema = z.object({
    name: z.union([z.literal('github'), z.literal('gitlab')]),
    link: z.string(),
})
