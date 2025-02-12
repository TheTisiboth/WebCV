import { z } from 'zod'

export const codeRepositorySchema = z.object({
    id: z.number(),
    name: z.union([z.literal('github'), z.literal('gitlab')]),
    link: z.string(),
})
