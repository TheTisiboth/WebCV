import {FC} from 'react'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import {type Project} from '../../types/types'
import {useTranslations} from 'next-intl'
import {fetchAPI} from '../../utils/fetch-api'

const Project: FC<Project> = ({title, description}) => {
    const t = useTranslations()
    return (
        <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
            <Col xs={12} md={true}>
                {/*<StyledImage image={image} alt={title} size={477}/>*/}
            </Col>
            <Col xs={12} md={true} className="align-self-center pr-5">
                <h3>
                    {
                        // t.rich(title, {
                        //     tag: (children) => <strong>{children}</strong>
                        // })
                        title
                    }
                </h3>
                <p className="text-left">{description}</p>
                <Row>
                    <Col xs={4}>
                        {/*<Link href={repository.href}>*/}
                        {/*    <Link.IconSocial Icon={repository.Icon} size='small'/>*/}
                        {/*</Link>*/}
                    </Col>
                    <Col className="text-right pr-md-5">
                        {/*{skills.map(skill => (*/}
                        {/*    <Skill skillName={skill} key={skill}/>*/}
                        {/*))}*/}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const Projects: FC = async () => {
    // const t = useTranslations('navbar')
    const projects: Project[] = await fetchAPI('projects')
console.log(projects)
    return (
        <Container id="Projects" className="pt-5">
            <Row className="mb-4 justify-content-center">
                <Col xs={true} md={8} className="pt-2 pb-2">
                    <Badge className="mytitle titles "><h2 className=" rounded ">{"Projects"}</h2></Badge>
                </Col>
            </Row>
            {projects.map((project) => (
                <Project {...project} key={project.title}/>
            ))}
        </Container>
    )
}
