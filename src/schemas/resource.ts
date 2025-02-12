import { z } from 'zod'

export const resourceSchema = z.object({
    id: z.number(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    publishedAt: z.coerce.date().optional(),
})
