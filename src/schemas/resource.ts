import { z } from 'zod'

export const resourceSchema = z.object({
    id: z.number(),
    documentId: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    publishedAt: z.coerce.date().optional(),
}).strict()
