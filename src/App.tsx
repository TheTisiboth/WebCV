import 'animate.css/animate.compat.css'
import React, { FC, ReactElement, Suspense } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import {
  Button, Col,
  Container,
  Figure, ListGroup, Nav, OverlayTrigger, Row
} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { IconContext } from 'react-icons'
import { AiOutlineGitlab } from 'react-icons/ai'
import {
  FaArrowAltCircleUp, FaGithub, FaLinkedin
} from 'react-icons/fa'
import './App.css'
import image from './assets/leo.jpg'
import { History } from './components/history'
import { Hobbies } from './components/hobbies'
import { MyNavbar } from './components/navbar'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Travels } from './components/travels'
import { computeAge, renderTooltip, scrollTo } from './utils'
import { animateScroll ,scroller} from 'react-scroll'

/**
 * LeftHeader, containing general info about author
 */
const LeftHeader: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Row>
        <Col md={12} className="pr-0 pl-0">
          <div className="name">
            <h1>Léo Jan</h1>
          </div>
          <div>
            <h5>{t('me.work')}</h5>
          </div>
          <div>
            <h5>{computeAge()} {t('me.years')}</h5>
          </div>
        </Col>
        <Col md={12} className="align-self-center pt-3 pt-md-0 pb-3 pb-md-0 mt-md-5 pr-0 pl-0">
          <div className="name">
            <h5>Polytech Grenoble</h5>
          </div>
          <div>
            <h5>{t('me.livesIn')}</h5>
          </div>
          <div>
            <a href="mailto:pro@leojan.fr" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">pro@leojan.fr</Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

/**
 * RightHeader containing info about Skills
 */
const RightHeader: FC = () => {
  return (
    <Skills />
  )
}

/**
 * Display an icon that links to social media
 * @param props info about the social media (href, icon)
 */
const IconSocial: FC<{ href: string | undefined, icon: React.ReactNode }> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconContext.Provider value={{ size: '3em' }}>
        <div>
          {icon}
        </div>
      </IconContext.Provider>
    </a>
  )
}

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

/**
 * Footer component
 */
const Footer: FC = () => {
  const { t } = useTranslation()
  const scrollOptions = {
    duration: 200
  }

  return (
    <Container>
      <ListGroup horizontal={true} className="justify-content-center copyright pt-2">
        <ListGroup.Item className="copyright" variant="dark">© 2020 Copyright: Léo Jan</ListGroup.Item>
      </ListGroup>
      <Row className="justify-content-center">
        <Col md={3}>
          <Nav.Link className="mt-2" onClick={() => animateScroll.scrollToTop(scrollOptions)} >
            <OverlayTrigger
              placement="right"
              delay={{ show: 0, hide: 0 }}
              overlay={renderTooltip(t('top'))}
            >
              <Button variant="outline-light">
                <FaArrowAltCircleUp className="mb-1" />
              </Button>
            </OverlayTrigger>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  )
}

// page uses the hook
const Page: FC = () => {
  return (
    <div id="App" className="App">
      <MyNavbar/>

      <AppHeader/>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true} animatePreScroll={false}>
        <section className="grey">
          <Projects/>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <section>
          <History/>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <section className="grey">
          <Hobbies/>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <section>
          <Travels />
        </section>
      </ScrollAnimation>
      <section className="App-footer">
        <Footer/>
      </section>
    </div>
  )
}

// loading component for suspense fallback
const Loader = (): ReactElement => (
  <div className="App"/>
)

// here app catches the suspense from page in case translations are not yet loaded
const App: FC = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Page/>
    </Suspense>
  )
}
export default App
