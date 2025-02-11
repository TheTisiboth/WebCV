import { z } from 'zod'
import {resourceSchema} from './resource'

export const mediaSchema = resourceSchema.extend({
    url: z.string().nonempty()
})
