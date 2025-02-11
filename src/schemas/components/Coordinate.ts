import { z } from 'zod'
import {resourceSchema} from '../resource'

export const coordinateSchema = resourceSchema.extend({
    lat: z.number(),
    lng: z.number(),
}).strict()
