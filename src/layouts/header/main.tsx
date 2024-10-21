import {FC} from 'react'
import {Col, Container, Figure, Row} from 'react-bootstrap'
import image from '../../assets/leo.jpg'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiOutlineGitlab} from 'react-icons/ai'
import IconSocial from '../../components/icon.tsx'
import LeftHeader from './left.tsx'
import RightHeader from './right.tsx'

/**
 * AppHeader, containing LeftHeader, Image, and RightHeader
 */
const AppHeader: FC = () => {
  return (
    <Container fluid={true} className="App-header">
      <Row className="content-justify-center">
        <Col sm={12} md={4} className="m-auto text-md-center align-self-center">
          <LeftHeader />
        </Col>
        <Col sm={12} md={4} className="align-self-center">
          <Row >
            <Col>
              <Figure className="mt-3">
                <Figure.Image
                  height="60%"
                  width="60%"
                  alt="171x180"
                  src={image}
                  roundedCircle={true}
                />
              </Figure>
            </Col>
          </Row>
          <Row className="App-header text-center">
            <Col xs={4} className="text-right">
              <IconSocial href="https://www.linkedin.com/in/l%C3%A9o-jan-065ba8125/" icon={<FaLinkedin />} />
            </Col>
            <Col xs={4} className="">
              <IconSocial href="https://github.com/TheTisiboth" icon={<FaGithub />} />
            </Col>
            <Col xs={4} className="text-left">
              <IconSocial href="https://gitlab.com/TheTisiboth" icon={<AiOutlineGitlab />} />
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={4} className="m-auto text-left align-self-center pl-0">
          <RightHeader />
        </Col>
      </Row>
    </Container>
  )
}

export default AppHeader
