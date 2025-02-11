import {z} from 'zod'

import {coordinateSchema} from './components/Coordinate'
import {resourceSchema} from './resource'

export const citySchema = z.array(
    resourceSchema.extend({
        name: z.string(),
        coordinate: coordinateSchema,
        locale: z.string()
    }).strict()
)

