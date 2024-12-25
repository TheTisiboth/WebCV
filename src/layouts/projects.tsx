import {FC} from 'react'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import {Skill} from './skills'
import Link, {StyledImage} from '../components/icon'
import {projects} from '../fixtures/projects'
import {type Project} from '../types'
import {useTranslations} from 'next-intl'

const Project: FC<Project> = ({image, title, body, repository, skills}) => {
    const t = useTranslations()
    return (
        <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
            <Col xs={12} md={true}>
                <StyledImage image={image} alt={title} size={477}/>
            </Col>
            <Col xs={12} md={true} className="align-self-center pr-5">
                <h3>
                    {
                        t.rich(title, {
                            tag: (children) => <strong>{children}</strong>
                        })
                    }
                </h3>
                <p className="text-left">{t(body)}</p>
                <Row>
                    <Col xs={4}>
                        <Link href={repository.href}>
                            <Link.IconSocial Icon={repository.Icon} size='small'/>
                        </Link>
                    </Col>
                    <Col className="text-right pr-md-5">
                        {skills.map(skill => (
                            <Skill skillName={skill} key={skill}/>
                        ))}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const Projects: FC = () => {
    const t = useTranslations('navbar')

    return (
        <Container id="Projects" className="pt-5">
            <Row className="mb-4 justify-content-center">
                <Col xs={true} md={8} className="pt-2 pb-2">
                    <Badge className="mytitle titles "><h2 className=" rounded ">{t('projects')}</h2></Badge>
                </Col>
            </Row>
            {projects.map((project) => (
                <Project {...project} key={project.title}/>
            ))}
        </Container>
    )
}
