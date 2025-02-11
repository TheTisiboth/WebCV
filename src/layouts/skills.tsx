import {FC} from 'react'
import {Badge, Col, Row} from 'react-bootstrap'
import Link from '../components/link'
import {getTranslations} from 'next-intl/server'
import {fetchAPI} from '../utils/fetch-api'
import {StrapiRoute} from '../types/generated/routes/StrapiRoute'
import {Skill as MySkills} from '../types/generated/Skill'
import {AllSkill, AllSkill as MySkill} from '../types/generated/AllSkill'

/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover)
 * @param skillName - The name of the skill to display
 */
type SkillProps =  MySkill
export const Skill: FC<SkillProps> = ({href, height, name, width, image, whiteIcon}) => {

    return (
        <Link href={href} className='m-2'>
            <Link.Tooltip tooltipLabel={name}>
                <Link.Image url={image.url} width={width} height={height} alt={name}
                    className={whiteIcon ? 'iconToWhite' : ''}/>
            </Link.Tooltip>
        </Link>
    )
}

type SkillCategory = keyof Omit<MySkills, 'documentId'>
const skillCategories: SkillCategory[][] = [['system', 'software'], ['web', 'other']]

/**
 * Display a list of skill. We want to display them on 2 rows, with 2 columns each (hence the 2D array skillCategories)
 */
export const Skills: FC = async () => {
    const t = await getTranslations()

    // Careful with the resource, it should be 'skill' in singular (it might break up when regenerating the types, as it might be wrong)
    const skills = await fetchAPI<MySkills>({resource: StrapiRoute.Skill, isLocalized: false})

    return (
        <div id="Skills" className="text-center pt-5 pt-md-2 pr-0 pr-md-5">
            <Row className=" justify-content-center">
                <Col md={6} xs={8} className="pt-2 pb-2  rounded">
                    <Badge className="titleReverse pl-3 pr-3"><h2>{t('navbar.skill')}</h2></Badge>
                </Col>
            </Row>
            {skillCategories.map((row) => (
                <Row key={row[0]} className="justify-content-center pt-4">
                    {row.map((category) => (
                        <SkillCategory category={category} categorySkills={skills[category]} key={category}/>
                    ))}
                </Row>
            ))}
        </div>
    )
}

const SkillCategory: FC<{category: SkillCategory, categorySkills: AllSkill[]}> = async ({category, categorySkills}) => {
    const t = await getTranslations()

    return (
        <Col key={category} md={6}>
            <Row>
                <Col>
                    <h5>{t(`skills.${category}`)}</h5>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={6} md={10}>
                    {categorySkills.map(skill => (
                        <Skill {...skill} key={skill.documentId}/>
                    ))}
                </Col>
            </Row>
        </Col>
    )
}
