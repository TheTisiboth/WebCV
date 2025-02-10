import {z} from 'zod'

const envSchema = z.object({
    NEXT_PUBLIC_STRAPI_API_TOKEN: z.string(),
    NEXT_PUBLIC_STRAPI_API_URL: z.string().url(),
    IS_PRODUCTION: z.boolean(),
    NEXT_PUBLIC_CLOUDINARY_NAME: z.string()
})

// We have to explicitly parse the variables one by one, otherwise they will be undefined with ...process.env
export const env = envSchema.parse({
    NEXT_PUBLIC_STRAPI_API_TOKEN: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_PUBLIC_CLOUDINARY_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
    IS_PRODUCTION: process.env.NODE_ENV === 'production'
})
