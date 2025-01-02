import {FC} from 'react'
import {Badge, Col, Row} from 'react-bootstrap'
import Link, {LinkTooltip, StyledImage} from '../components/icon'
import {allSkillImages, others, software, system, web} from '../fixtures/skills'
import {type SkillImage, type SkillInfos} from '../types'
import {useTranslations} from 'next-intl'


/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover)
 * @param skillName - The name of the skill to display
 */
type SkillProps = { skillName: string }
export const Skill: FC<SkillProps> = ({skillName}) => {
    const skillMetadata = allSkillImages.find((skill: SkillImage) => skill.image.includes(skillName))

    if (!skillMetadata || !skillName)
        throw new Error(`Skill ${skillName} not found`)

    return (
        <Link href={skillMetadata.href} className='m-2'>
            <LinkTooltip tooltipLabel={skillMetadata.tooltip}>
                <StyledImage name={skillName} width={skillMetadata.width} height={skillMetadata.height} alt={skillMetadata.tooltip}
                    className={skillMetadata.class}/>
            </LinkTooltip>
        </Link>
    )
}

/**
 * Display a list of skill
 */
export const Skills: FC = () => {
    const t = useTranslations()

    const list: SkillInfos[][] = [[system, software], [web, others]]

    return (
        <div id="Skills" className="text-center pt-5 pt-md-2 pr-0 pr-md-5">
            <Row className=" justify-content-center">
                <Col md={6} xs={8} className="pt-2 pb-2  rounded">
                    <Badge className="titleReverse pl-3 pr-3"><h2>{t('navbar.skill')}</h2></Badge>
                </Col>
            </Row>
            {list.map((row: SkillInfos[]) => {
                return (
                    <Row key={row[0].title} className="justify-content-center pt-4">
                        {row.map((s: SkillInfos) => {
                            return (
                                <Col key={s.title} md={6}>
                                    <Row>
                                        <Col>
                                            <h5>{t(s.title)}</h5>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col xs={6} md={10}>
                                            {s.skills.map(skill => (
                                                <Skill skillName={skill.image} key={skill.href}/>
                                            ))}
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
        </div>
    )
}
