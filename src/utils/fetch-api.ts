import { StrapiRoute } from '../types/generated/routes/StrapiRoute';
import { env } from './env';
import { projectSchema } from "../schemas/generated/Project.zod";
import { skillSchema } from "../schemas/generated/Skill.zod";
import { citySchema } from "../schemas/generated/City.zod";
import { cvSchema } from "../schemas/generated/Cv.zod";
import { historySchema } from "../schemas/generated/History.zod";
import { z } from "zod";

type FetchApiProps = {
    resource: StrapiRoute;
    isLocalized?: boolean;
    locale?: string;
};

const populateFields: Record<string, string[]> = {
    projects: ['picture', 'codeRepository', 'skills.image'],
    skill: ['web.image', 'system.image', 'software.image', 'other.image']
};

const schemaMap: Record<StrapiRoute, z.ZodSchema<any>> = {
    projects: projectSchema,
    skill: skillSchema,
    cities: citySchema,
    cvs: cvSchema,
    histories: historySchema
};

async function fetchAPI<T>({ resource, isLocalized = true, locale = 'en' }: FetchApiProps): Promise<T> {
    const url = buildUrl(resource, isLocalized, locale);
    const data = await fetchData<T>(url);
    return validateData(resource, data);
}

function buildUrl(resource: StrapiRoute, isLocalized: boolean, locale: string): URL {
    const params = new URLSearchParams({ 'sort': 'id:asc', ...(isLocalized && { locale }) });

    const fieldsToPopulate = populateFields[resource];
    if (fieldsToPopulate) {
        fieldsToPopulate.forEach((field, index) => params.append(`populate[${index}]`, field));
    } else {
        params.append('populate', '*');
    }

    return new URL(`${env.NEXT_PUBLIC_STRAPI_API_URL}/api/${resource}?${params}`);
}

async function fetchData<T>(url: URL): Promise<T> {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
    });

    if (!response.ok) {
        console.error(await response.text());
        throw new Error(`Failed to fetch data from Strapi (url=${url}, status=${response.status}), error: ${response.statusText}`);
    }

    return (await response.json()).data;
}

function validateData<T>(resource: StrapiRoute, data: T): T {
    const schema = schemaMap[resource];
    if (!schema) throw new Error(`No schema found for resource: ${resource}`);

    const validatedData = schema.safeParse(data);
    if (!validatedData.success) {
        throw new Error(`Failed to validate data for resource: ${resource}. You should check in the back office, if you don't have missing required data. \nZod error: ${JSON.stringify(validatedData.error.errors)}`);
    }

    return validatedData.data as T;
}

export { fetchAPI };
