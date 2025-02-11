import { z } from 'zod'
import {resourceSchema} from '../resource'

export const pictureSchema = resourceSchema.extend({
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
}).strict()
