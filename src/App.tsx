import 'animate.css/animate.min.css';
import { TFunction } from 'i18next';
import React, { MutableRefObject, ReactElement, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  Badge, Button, Col,
  Container,
  Figure, ListGroup, Nav, Navbar, NavDropdown, OverlayTrigger, Row
} from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { AiOutlineGitlab } from 'react-icons/ai';
import {
  FaArrowAltCircleUp, FaBasketballBall, FaGithub, FaGitlab, FaLinkedin, FaRegFilePdf, FaTableTennis
} from 'react-icons/fa';
import { GiFrisbee } from 'react-icons/gi';
import { MdFileDownload, MdTranslate } from 'react-icons/md';
import './App.css';
import Badminton from './assets/badminton.png';
import CV_DE from './assets/CV_DE_Leo_Jan.pdf';
import CV_EN from './assets/CV_EN_Leo_Jan.pdf';
import CV_FR from './assets/CV_FR_Leo_Jan.pdf';
import image from './assets/leo.jpg';
import logo from './assets/logo.png';
import coloricm from './assets/projects/coloricm.png';
import guc from './assets/projects/guc.png';
import kine from './assets/projects/kine.png';
import webCV from './assets/projects/webCV.png';
import CustomMap from './components/customMap';
import { History } from "./components/history";
import { Skills } from './components/skills';
import { computeAge, renderTooltip, scrollTo } from './utils';


// tslint:disable-next-line: no-var-requires
require('./global.d.ts');



/**
* Translation button, that translate the whole page. It switches between english (by default), french and german
*/
function TranslationButton(props: { onClick: () => void; }): ReactElement {
  const { t, i18n } = useTranslation();

  /**
  * Get a language code from the i18n current language
  */
  const getShortLanguage = (language: any): string => {
    if (language.includes('fr')) {
      return 'fr';
    } else if (language.includes('de')) {
      return 'de';
    } else {
      return 'en';
    }
  }

  const [state, setState] = useState<{ langShort: string }>({
    langShort: getShortLanguage(i18n.language),
  });


  /**
  * Switch language between en, fr and de
  */
  const changeLanguage = useCallback(
    (lng: string): void => {
      if (!i18n) {
        return;
      }
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  /**
  * When we click on the translate button, we switch the button label, and switch the language
  */
  const handleClick = (language: string): void => {
    setState({
      langShort: language,
    });
    changeLanguage(language);
    // Toggle navbar
    props.onClick();
  };

  /*
  * Get the full language name from the code
  */
  const getLangFull = (lang: string): string => {
    switch (lang) {
      case 'fr':
        return t('languages.french');
      case 'de':
        return t('languages.german');
      default:
        return t('languages.english');
    }
  }

  return (
    <NavDropdown title={
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 0, hide: 0 }}
        overlay={renderTooltip(t('translationTooltip'))}
      >
        <span className="m-auto">
          <MdTranslate className=" mr-2 myIcon" />{getLangFull(state.langShort)}
        </span>
      </OverlayTrigger>}
      id="basic-nav-dropdown" className="m-auto mr-md-5">
      <NavDropdown.Item className="text-center" onClick={() => { handleClick('fr') }}>
        <div>
          {t('languages.french')}
        </div>
      </NavDropdown.Item>
      <NavDropdown.Item className="text-center" onClick={() => { handleClick('en') }}>
        <div>
          {t('languages.english')}
        </div>
      </NavDropdown.Item>
      <NavDropdown.Item className="text-center" onClick={() => { handleClick('de') }}>
        <div>
          {t('languages.german')}
        </div>
      </NavDropdown.Item>
    </NavDropdown>
  );
}

/**
* The Navbar, containing the different section of the website, and the translate button
*/
function MyNavbar(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  // Toggle component
  const toggle: MutableRefObject<any> = useRef();
  // Collapse component
  const collapse: MutableRefObject<any> = useRef();
  // Navbar component
  const nav: MutableRefObject<any> = useRef();

  // Triger toggle navbar if collapsed
  const onClick = (): void => {
    if (collapse.current.className.includes('show')) {
      toggle.current.click();
    }
  };

  // If we click outside the navbar, we close it
  const handleClick = (e: MouseEvent): void => {
    if (!nav.current.contains(e.target)) {
      onClick();
    }
  };

  useEffect((): (() => void) => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return (): void => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const scrollOptions = {
    smooth: true,
    offset: -50,
    duration: 500,
  };

  return (
    <Navbar id="nav" ref={nav} collapseOnSelect={true} expand="md" bg="dark" variant="dark" className="pt-0 pb-0" fixed="top">
      <Nav.Link href="#App" onSelect={scrollTo('App', scrollOptions)}>
        <img
          alt=""
          src={logo}
          width="40%"
          height="40%"
          className="d-inline-block align-top"
        />{' '}
      </Nav.Link>
      <Navbar.Toggle ref={toggle} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse ref={collapse} id="responsive-navbar-nav" className="pb-3 pb-md-0">
        <Nav className="mr-auto">
          <Nav.Link className="" href="#Skills" onSelect={scrollTo('Skills', scrollOptions)}>
            {t('navbar.skill')}
          </Nav.Link>
          <Nav.Link className="" href="#Projects" onSelect={scrollTo('Projects', scrollOptions)}>
            {t('navbar.projects')}
          </Nav.Link>
          <Nav.Link className="" href="#History" onSelect={scrollTo('History', scrollOptions)}>
            {t('navbar.history')}
          </Nav.Link>
          <Nav.Link className="" href="#Travels" onSelect={scrollTo('Travels', scrollOptions)}>
            {t('navbar.travel')}
          </Nav.Link>
        </Nav>
        <Nav >
          <NavDropdown title={
            <span className="m-auto">
              <MdFileDownload className=" mr-2 myIcon" />{t('navbar.cv')}
            </span>}
            id="basic-nav-dropdown" className="m-auto mr-md-5">

            <NavDropdown.Item href={CV_FR} download={true} className="text-center">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip(t('cvFrTooltip'))}
              >
                <div>
                  <FaRegFilePdf className="mr-2" />
                  CV FR
                </div>
              </OverlayTrigger>
            </NavDropdown.Item>
            <NavDropdown.Item href={CV_DE} download={true} className="text-center">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip(t('cvDeTooltip'))}
              >
                <div>
                  <FaRegFilePdf className="mr-2" />
                  CV DE
                </div>
              </OverlayTrigger>
            </NavDropdown.Item>
            <NavDropdown.Item href={CV_EN} download={true} className="text-center">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip(t('cvEnTooltip'))}
              >
                <div>
                  <FaRegFilePdf className="mr-2" />
                  CV EN
                </div>
              </OverlayTrigger>
            </NavDropdown.Item>
          </NavDropdown>

          <TranslationButton onClick={onClick} />

        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
}

/**
* LeftHeader, containing general info about author
*/
function LeftHeader(): ReactElement {
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
            <a href="mailto:pro@janleo.fr" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">pro@janleo.fr</Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

/**
* RightHeader containing info about hobbies
*/
function RightHeader(): ReactElement {
  return (
    <Skills />
  );
}

/**
* Display an icon that links to social media
* @param props info about the social media (href, icon)
*/
function IconSocial(props: { href: string | undefined, icon: React.ReactNode }): ReactElement {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconContext.Provider value={{ size: '3em' }}>
        <div>
          {props.icon}
        </div>
      </IconContext.Provider>
    </a>
  );
}

/**
* AppHeader, containing LeftHeader, Image, and RightHeader
*/
function AppHeader(): ReactElement {
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
  );
}

/**
* Projects section
*/
function Projects(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();

  return (
    <Container id="Projects" className="pt-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={true} md={8} className="pt-2 pb-2">
          <Badge><h2 className="mytitle titles rounded ">{t('navbar.projects')}</h2></Badge>
        </Col>
      </Row>
      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={webCV}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.0.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.0.body')}</p>
          <Row>
            <Col xs={4}>
              <a
                href="https://github.com/TheTisiboth/WebCV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-md-5">
              <Skills skill="React" />
              <Skills skill="Bootstrap" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={kine}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.1.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.1.body')}</p>
          <Row>
            <Col xs={4}>
              <a
                href="https://gitlab.com/Eva_B/reeducation_kine_connecte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGitlab />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-md-5">
              <Skills skill="Angular" />
              <Skills skill="MongoDB" />
              <Skills skill="Node" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={guc}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.2.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.2.body')}</p>
          <Row>
            <Col xs={3}>
              <a
                href="https://gitlab.com/Polytech-INFO5-2019-2020/g3/2019-2020-ecom-info5-root"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGitlab />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-0 pr-md-5">
              <Skills skill="JHipster" />
              <Skills skill="Angular" />
              <Skills skill="Spring" />
              <Skills skill="Postgre" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={coloricm}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.3.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.3.body')}</p>
          <Row>
            <Col xs={4}>
              <a
                href="https://github.com/TheTisiboth/PLA_2018"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-md-5">
              <Skills skill="Java" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function Hobbies(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  return (
    <Container>
      <Row className="pt-5 mb-4 justify-content-center">
        <Col xs={true} className="pt-2 pb-2">
          <Badge>
            <h2 id="longTitle" className="mytitle rounded ">{t('navbar.hobbies')}</h2>
          </Badge>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col md={10}>
          <div className="text-left">
            <ul>
              <li>
                <h5>{t('hobbies.it')}</h5>
              </li>
              <li className="">
                <h5>Sports</h5>
                <ul>
                  <li style={{ listStyleType: 'none' }}>
                    {' '}
                    <GiFrisbee />{' '}
                    <span className="ml-2 ">{t('hobbies.frisbee')}</span>
                  </li>
                  <li style={{ listStyleType: 'none' }}>
                    {' '}
                    <img
                      height="20px"
                      src={Badminton}
                      alt=""
                    />
                    <span className="ml-2 ">
                      {t('hobbies.badminton')}
                    </span>
                  </li>
                  <li style={{ listStyleType: 'none' }}>
                    {' '}
                    <FaBasketballBall />{' '}
                    <span className="ml-2 ">Basket-ball</span>
                  </li>
                  <li style={{ listStyleType: 'none' }}>
                    {' '}
                    <FaTableTennis />{' '}
                    <span className="ml-2 ">{t('hobbies.pingpong')}</span>
                  </li>
                </ul>
              </li>
              <li>
                <h5>{t('hobbies.read')}</h5>
              </li>
              <li>
                <h5>{t('hobbies.music')}</h5>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

/**
* Travel section, containing a leaflet map
*/
function Travel(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();

  return (
    <Container id="Travels" className="pt-5 pb-4">
      <Row className="mb-4 justify-content-center">
        <Col xs={8} className="pt-2 pb-2">
          <Badge>
            <h2 className="mytitle titles rounded ">{t('navbar.travel')}</h2>
          </Badge>
        </Col>
      </Row>
      <Row className="pt-5 mb-4 justify-content-center">
        <Col md={10}>
          <CustomMap />
        </Col>
      </Row>
    </Container>
  );
}

/**
* Footer component
*/
function Footer(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  const scrollOptions = {
    smooth: true,
    offset: -40,
    duration: 1000,
  };

  return (
    <Container>
      <ListGroup horizontal={true} className="justify-content-center copyright pt-2">
        <ListGroup.Item className="copyright" variant="dark">© 2020 Copyright: Léo Jan</ListGroup.Item>
      </ListGroup>
      <Row className="justify-content-center">
        <Col md={3}>
          <Nav.Link className="mt-2" href="#App" onSelect={scrollTo('App', scrollOptions)}>
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
  );
}

// page uses the hook
function Page(): ReactElement {
  return (
    <div id="App" className="App">
      <MyNavbar />

      <AppHeader />
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true} >
        <section className="grey">
          <Projects />
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <section>
          <History />
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <section className="grey">
          <Hobbies />
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <section>
          <Travel />
        </section>
      </ScrollAnimation>

      <section className="App-footer">
        <Footer />
      </section>
    </div >
  );
}

// loading component for suspense fallback
const Loader = (): ReactElement => (

  <div className="App" />
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App(): ReactElement {

  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
