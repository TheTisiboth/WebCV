import {FC} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import image from '../../assets/leo.jpg'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiOutlineGitlab} from 'react-icons/ai'
import LeftHeader from './left'
import RightHeader from './right'
import Link, {Image} from '../../components/icon'

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
              <Image src={image} roundedCircle alt='banner image' margin='mt-3' size={285} />
            </Col>
          </Row>
          <Row className="App-header text-center">
            <Col xs={4} className="text-right">
              <Link href='https://www.linkedin.com/in/l%C3%A9o-jan-065ba8125'>
                <Link.IconSocial Icon={FaLinkedin} />
              </Link>
            </Col>
            <Col xs={4}>
              <Link href='https://github.com/TheTisiboth'>
                <Link.IconSocial Icon={FaGithub} />
              </Link>
            </Col>
            <Col xs={4} className="text-left">
              <Link href='https://gitlab.com/TheTisiboth'>
                <Link.IconSocial Icon={AiOutlineGitlab} />
              </Link>
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
