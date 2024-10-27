import { FC } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import { IconType} from 'react-icons'
import { FaGithub, FaGitlab } from 'react-icons/fa'
import coloricm from '../assets/projects/coloricm.png'
import guc from '../assets/projects/guc.png'
import kine from '../assets/projects/kine.png'
import webCV from '../assets/projects/webCV.png'
import { Skills } from './skills'
import Link, {Image} from '../components/icon.tsx'

type ProjectProps = {
  image: string
  title: string
  body: string
  skills: string[]
  repository: {
    Icon: IconType
    href: string
  }
}
const Project: FC<ProjectProps> = ({image, title, body, repository, skills}) => {
  const { t } = useTranslation()
  return (
    <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
      <Col xs={12} md={true}>
        <Image src={image} alt={title} size={477} />
      </Col>
      <Col xs={12} md={true} className="align-self-center pr-5">
        <h3>
          <Trans i18nKey={title}>
            <strong></strong>
          </Trans>
        </h3>
        <p className="text-left">{t(body)}</p>
        <Row>
          <Col xs={4}>
            <Link href={repository.href}>
              <Link.IconSocial Icon={repository.Icon} size='small'  />
            </Link>
          </Col>
          <Col className="text-right pr-md-5">
            {skills.map(skill => (
              <Skills skillName={skill} key={skill} />
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export const Projects: FC = () => {
  const {t} = useTranslation()
  const projects: ProjectProps[] = [
    {
      image: webCV,
      title: 'projects.0.title',
      body: 'projects.0.body',
      skills: ['React', 'Bootstrap'],
      repository: {
        Icon: FaGithub,
        href: 'https://github.com/TheTisiboth/WebCV'
      },
    },
    {
      image: kine,
      title: 'projects.1.title',
      body: 'projects.1.body',
      skills: ['Angular', 'MongoDB', 'Node'],
      repository: {
        Icon: FaGitlab,
        href: 'https://gitlab.com/Eva_B/reeducation_kine_connecte'
      },
    },
    {
      image: guc,
      title: 'projects.2.title',
      body: 'projects.2.body',
      skills: ['JHipster', 'Angular', 'Spring', 'Postgre'],
      repository: {
        Icon: FaGitlab,
        href: 'https://gitlab.com/Polytech-INFO5-2019-2020/g3/2019-2020-ecom-info5-root'
      },
    },
    {
      image: coloricm,
      title: 'projects.3.title',
      body: 'projects.3.body',
      skills: ['Java'],
      repository: {
        Icon: FaGithub,
        href: 'https://github.com/TheTisiboth/PLA_2018'
      },
    },
  ]
  return (
    <Container id="Projects" className="pt-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={true} md={8} className="pt-2 pb-2">
          <Badge className="mytitle titles "><h2 className=" rounded ">{t('navbar.projects')}</h2></Badge>
        </Col>
      </Row>
      {projects.map((project) => (
        <Project {...project} key={project.title}/>
      ))}
    </Container>
  )
}
