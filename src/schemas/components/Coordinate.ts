import { z } from 'zod'

export const coordinateSchema = z.object({
    id: z.number(),
    lat: z.number(),
    lng: z.number(),
})
