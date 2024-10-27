import { FC, ReactElement } from 'react'
import {Badge, Col, Row} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { extraSkills, others, software, system, web } from '../components/constant'
import Link from '../components/icon.tsx'

interface Skill {
  image: string;
  href: string;
  tooltip: string;
  class?: string;
  size?: number;
}

export interface Skills {
  title: string;
  skills: Skill[];
}

/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover)
 * @param props Info about the image to display
 */
const Skill: FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Link href={skill.href} className='m-2'>
      <Link.LinkTooltip tooltipLabel={skill.tooltip}>
        <Link.Image src={skill.image} size={skill.size} alt={skill.tooltip} className={skill.class} />
      </Link.LinkTooltip>
    </Link>
  )
}

/**
 * Display a list of skill
 */
type SkillsProps = {
    skillName?: string
}
export const Skills: FC<SkillsProps> = ({ skillName }) => {
  const { t } = useTranslation()

  const list: Skills[][] = [[system, software], [web, others]]

  // We want to display all the skills
  if (!skillName) {
    return (
      <div id="Skills" className="text-center pt-5 pt-md-2 pr-0 pr-md-5">
        <Row className=" justify-content-center">
          <Col md={6} xs={8} className="pt-2 pb-2  rounded">
            <Badge className="titleReverse pl-3 pr-3"><h2 >{t('navbar.skill')}</h2></Badge>
          </Col>
        </Row>
        {list.map((row: Skills[]): ReactElement => {
          return (
            <Row key={row[0].title} className="justify-content-center pt-4">
              {row.map((s: Skills): ReactElement => {
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

  const allSkills = [...list[0], ...list[1], extraSkills]
  const skills = allSkills.map(({ skills }: Skills): Skill[] => skills).flat()
  const mySkill: Skill = skills.find((skill: Skill) => skill.tooltip.includes(skillName as string)) as Skill

  return (<Skill skill={mySkill} />)
}
