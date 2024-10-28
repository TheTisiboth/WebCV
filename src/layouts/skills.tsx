import { FC, ReactElement } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Link from '../components/icon'
import { allSkillImages, others, software, system, web } from '../fixtures/skills'
import { type SkillImage, type SkillInfos } from '../types'


/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover)
 * The params are mutually exclusive: either skill or skillName
 * @param skill - The skill to display
 * @param skillName - The name of the skill to display
 */
type SkillProps = // We can either pass a SkillImage or a skillName
  | { skill: SkillImage; skillName?: never }
  | { skill?: never; skillName: string }
export const Skill: FC<SkillProps> = ({ skill, skillName }) => {
  if (skillName) {
    const mySkill = allSkillImages.find((skill: SkillImage) => skill.tooltip.includes(skillName))

    if (!mySkill)
      throw new Error(`Skill ${skillName} not found`)

    return (<Skill skill={mySkill}/>)
  }

  return (
    <>
      {skill && (
        <Link href={skill.href} className='m-2'>
          <Link.LinkTooltip tooltipLabel={skill.tooltip}>
            <Link.Image image={skill.image} size={skill.size} alt={skill.tooltip} className={skill.class}/>
          </Link.LinkTooltip>
        </Link>
      )}
    </>
  )
}

/**
 * Display a list of skill
 */
export const Skills: FC = () => {
  const { t } = useTranslation()

  const list: SkillInfos[][] = [ [ system, software ], [ web, others ] ]

  return (
    <div id="Skills" className="text-center pt-5 pt-md-2 pr-0 pr-md-5">
      <Row className=" justify-content-center">
        <Col md={6} xs={8} className="pt-2 pb-2  rounded">
          <Badge className="titleReverse pl-3 pr-3"><h2>{t('navbar.skill')}</h2></Badge>
        </Col>
      </Row>
      {list.map((row: SkillInfos[]): ReactElement => {
        return (
          <Row key={row[0].title} className="justify-content-center pt-4">
            {row.map((s: SkillInfos): ReactElement => {
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
                        <Skill skill={skill} key={skill.href}/>
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
