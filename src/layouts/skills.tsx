import {FC} from 'react'
import {Badge, Col, Row} from 'react-bootstrap'
import Link, {LinkTooltip, StyledImage} from '../components/icon'
import {MySkill, MySkills} from '../types'
import {getTranslations} from 'next-intl/server'
import {fetchAPI} from '../utils/fetch-api'


/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover)
 * @param skillName - The name of the skill to display
 */
type SkillProps =  MySkill
export const Skill: FC<SkillProps> = ({href, height, name, width, image, whiteIcon}) => {

    return (
        <Link href={href} className='m-2'>
            <LinkTooltip tooltipLabel={name}>
                <StyledImage url={image.url} width={width} height={height} alt={name}
                    className={whiteIcon ? 'iconToWhite' : ''}/>
            </LinkTooltip>
        </Link>
    )
}

type SkillCategory = keyof MySkills
const skillCategories: SkillCategory[][] = [['system', 'software'], ['web', 'other']]

/**
 * Display a list of skill
 */
export const Skills: FC = async () => {
    const t = await getTranslations()

    const skills = await fetchAPI<MySkills>({resource: 'skill', isLocalized: false})

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
                        <Col key={category} md={6}>
                            <Row>
                                <Col>
                                    <h5>{t(`skills.${category}`)}</h5>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col xs={6} md={10}>
                                    {skills[category].map(skill => (
                                        <Skill {...skill}/>
                                    ))}
                                </Col>
                            </Row>
                        </Col>
                    )
                    )}
                </Row>
            )
            )}
        </div>
    )
}
