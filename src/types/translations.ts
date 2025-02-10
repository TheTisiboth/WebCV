import { z } from 'zod'

const translationSchema = z.object({
    title: z.string(),
    top: z.string(),
    navbar: z.object({
        presentation: z.string(),
        education: z.string(),
        experience: z.string(),
        skill: z.string(),
        travel: z.string(),
        projects: z.string(),
        cv: z.string(),
        hobbies: z.string(),
        history: z.string(),
    }),
    me: z.object({
        work: z.string(),
        livesIn: z.string(),
        years: z.string(),
    }),
    translationTooltip: z.string(),
    cvFrTooltip: z.string(),
    cvEnTooltip: z.string(),
    cvDeTooltip: z.string(),
    languages: z.object({
        french: z.string(),
        english: z.string(),
        german: z.string(),
    }),
    now: z.string(),
    skills: z.object({
        system: z.string(),
        software: z.string(),
        web: z.string(),
        other: z.string(),
    }),
    hobbies: z.object({
        it: z.string(),
        read: z.string(),
        music: z.string(),
        frisbee: z.string(),
        badminton: z.string(),
        basketball: z.string(),
        pingpong: z.string(),
    }),
    projects: z.object({
        months: z.string(),
    })
}).strict('You should provide all the translations from the schema, and no more')

export type Translation = z.infer<typeof translationSchema>

export const validateTranslation = (translation: unknown) => {
    return translationSchema.parse(translation)
}
