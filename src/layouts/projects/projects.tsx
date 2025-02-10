import {FC} from 'react'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import {type Project} from '../../types/generated/Project'
import SocialLink from './SocialLink'
import {StyledImage} from '../../components/icon'
import {Skill} from '../skills'
import {fetchAPI} from '../../utils/fetch-api'
import {getLocale, getTranslations} from 'next-intl/server'
import {StrapiRoute} from '../../types/generated/routes/StrapiRoute'

const Project: FC<Project> = async ({title, description, codeRepository, picture, skills, year, duration}) => {
    const t = await getTranslations('projects')

    return (
        <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
            <Col xs={12} md={true}>
                <StyledImage url={picture.url} alt={title} size={477}/>
            </Col>
            <Col xs={12} md={true} className="align-self-center pr-5">
                <h3><b>{title}</b>, {year} - {t('months', {count: duration})}</h3>
                <p className="text-left">{description}</p>
                <Row>
                    <Col xs={4}>
                        <SocialLink link={codeRepository.link} name={codeRepository.name}/>
                    </Col>
                    <Col className="text-right pr-md-5">
                        {skills.map(skill =>
                            <Skill key={skill.name} {...skill}/>
                        )}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const Projects: FC = async () => {
    const locale = await getLocale()
    const projects = await fetchAPI<Project[]>({resource: StrapiRoute.Project,locale})
    const t = await getTranslations('navbar')

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
