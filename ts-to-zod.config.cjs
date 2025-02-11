/**
 * ts-to-zod configuration.
 *
 * @type {import("ts-to-zod").TsToZodConfig}
 */
module.exports = [
    {name: 'codeRepository', input: 'src/types/generated/components/CodeRepository.ts', output: 'src/schemas/generated/components/CodeRepository.ts'},
    {name: 'Coordinate', input: 'src/types/generated/components/Coordinate.ts', output: 'src/schemas/generated/components/Coordinate.ts'},
    {name: 'Picture', input: 'src/types/generated/components/Picture.ts', output: 'src/schemas/generated/components/Picture.ts'},
    {name: 'Media', input: 'src/types/generated/Media.ts', output: 'src/schemas/generated/Media.ts'},
    {name: 'AllSkill', input: 'src/types/generated/AllSkill.ts', output: 'src/schemas/generated/AllSkill.ts'},
    {name: 'Project', input: 'src/types/generated/Project.ts', output: 'src/schemas/generated/Project.zod.ts'},
    {name: 'City', input: 'src/types/generated/City.ts', output: 'src/schemas/generated/City.zod.ts'},
    {name: 'Cv', input: 'src/types/generated/Cv.ts', output: 'src/schemas/generated/Cv.zod.ts'},
    {name: 'History', input: 'src/types/generated/History.ts', output: 'src/schemas/generated/History.zod.ts'},
    {name: 'Skill', input: 'src/types/generated/Skill.ts', output: 'src/schemas/generated/Skill.zod.ts'}
]
