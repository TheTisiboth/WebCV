import {z} from 'zod'
import {pictureSchema} from './components/Picture'
import {mediaSchema} from './Media'
import {resourceSchema} from './resource'

export const historySchema = z.array(
    resourceSchema.extend({
        title: z.string(),
        description: z.string(),
        type: z.union([z.literal('job'), z.literal('education')]).optional(),
        link: z.string().optional(),
        picture: mediaSchema.optional(),
        dates: pictureSchema,
        locale: z.string(),
        order: z.number()
    })
)
