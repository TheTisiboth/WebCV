import {z} from 'zod'

import {mediaSchema} from './Media'
import {resourceSchema} from './resource'

export const cvSchema = z.array(
    resourceSchema.extend({
        cv: mediaSchema,
        cv_locale: z.union([z.literal('fr'), z.literal('en'), z.literal('de')]),
    }).strict()
)
