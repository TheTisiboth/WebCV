import { z } from 'zod'

export const pictureSchema = z.object({
    id: z.number(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
})
