import React, { Suspense, useState, ReactElement, useCallback, useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./App.css";
import {
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Container,
  Figure,
  OverlayTrigger,
  NavDropdown,
  ListGroup
} from "react-bootstrap";
import { scroller } from 'react-scroll';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import { renderTooltip } from "./utils";
import CustomMap from "./components/customMap";
import { Skills } from "./components/skills";
import { IconContext } from "react-icons";
import {
  FaLinkedin,
  FaGithub,
  FaBasketballBall,
  FaTableTennis,
} from "react-icons/fa";
import { GiFrisbee } from "react-icons/gi";
import { AiOutlineGitlab } from "react-icons/ai";
import { MdTranslate, MdFileDownload } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import image from "./assets/leo.jpg";
import logo from "./assets/logo.png";
import CV_FR from "./assets/CV_FR_Leo_Jan.pdf";
import CV_EN from "./assets/CV_EN_Leo_Jan.pdf";
import Badminton from "./assets/badminton.png";
import webCV from "./assets/projects/webCV.png";
import coloricm from "./assets/projects/coloricm.png";
import mpaa from "./assets/mpaa.png";
import enovacom from "./assets/enovacom.png";
import { TFunction } from 'i18next';

require("./global.d.ts");


/**
 * Translation button, that translate the whole page. It switches between english (by default) and french
 */
function TranslationButton(props: { onClick: () => void; }): ReactElement {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState<{ isEnglish: boolean, buttonLabel: string }>({
    isEnglish: i18n.language.includes("en"),
    buttonLabel: i18n.language.includes("en") ? "en" : "fr",
  });

  /**
   * Switch language between en and fr
   */
  const changeLanguage = useCallback(
    (lng: string): any => {
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
  const handleClick = (): any => {
    const isEnglish: boolean = !state.isEnglish;
    const buttonLabel: string = isEnglish ? "en" : "fr";
    setState({
      isEnglish,
      buttonLabel,
    });
    changeLanguage(buttonLabel);
    // Toggle navbar
    props.onClick();
  };

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 0, hide: 0 }}
      overlay={renderTooltip(t("translationTooltip"))}
    >
      <Button className="m-auto buttons" variant="outline-light" onClick={handleClick}>
        <MdTranslate className="mr-2" />
        {state.buttonLabel.toUpperCase()}
      </Button>
    </OverlayTrigger>
  );
}

/**
 * The Navbar, containing the different section of the website, and the translate button
 */
function MyNavbar(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  // Toggle component
  const toggle: any = useRef();
  // Collapse component
  const collapse: any = useRef();
  // Navbar component
  const nav: any = useRef();

  // Triger toggle navbar if collapsed
  const onClick = () => {
    if (collapse.current.className.includes("show"))
      toggle.current.click();
  }

  // If we click outside the navbar, we close it
  const handleClick = (e: { target: any; }) => {
    if (!nav.current.contains(e.target)) {
      onClick();
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const scrollOptions = {
    smooth: true,
    offset: -40,
    duration: 500,
  };

  return (
    <Navbar id="nav" ref={nav} collapseOnSelect={true} expand="md" bg="dark" variant="dark" className="pt-0 pb-0" fixed="top">
      <Nav.Link href="#App" onSelect={() => scroller.scrollTo('App', scrollOptions)}>
        <img
          alt=""
          src={logo}
          width="40%"
          height="40%"
          className="d-inline-block align-top"
        />{" "}

      </Nav.Link>
      <Navbar.Toggle ref={toggle} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse ref={collapse} id="responsive-navbar-nav" className="pb-3 pb-md-0">
        <Nav className="mr-auto">
          <Nav.Link className="" href="#Skills" onSelect={() => scroller.scrollTo('Skills', scrollOptions)}>
            {t("navbar.skill")}
          </Nav.Link>
          <Nav.Link className="" href="#Projects" onSelect={() => scroller.scrollTo('Projects', scrollOptions)}>
            {t("navbar.projects")}
          </Nav.Link>
          <Nav.Link className="" href="#History" onSelect={() => scroller.scrollTo('History', scrollOptions)}>
            {t("navbar.history")}
          </Nav.Link>
          <Nav.Link className="" href="#Travels" onSelect={() => scroller.scrollTo('Travels', scrollOptions)}>
            {t("navbar.travel")}
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
                overlay={renderTooltip(t("cvFrTooltip"))}
              >
                <div>
                  <FaRegFilePdf className="mr-2" />
                CV FR
                </div>
              </OverlayTrigger>
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href={CV_EN} download={true} className="text-center">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip(t("cvEnTooltip"))}
              >
                <div>
                  <FaRegFilePdf className="mr-2" />
                CV EN
                </div>
              </OverlayTrigger>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#">
            <TranslationButton onClick={onClick} />
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
}

/**
 * LeftHeader, containing general info about author
 */
function LeftHeader(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  return (
    <div>
      <Row>
        <Col md={12} className="pr-0 pl-0">
          <div className="name">
            <h1>Léo Jan</h1>
          </div>
          <div>
            <h5>{t("me.work")}</h5>
          </div>
          <div>
            <h5>{t("me.age")}</h5>
          </div>
        </Col>
        <Col md={12} className="align-self-center pt-3 pt-md-0 pb-3 pb-md-0 mt-md-5 pr-0 pl-0">
          <div className="name">
            <h5>Polytech Grenoble</h5>
          </div>
          <div>
            <h5>{t("me.livesIn")}</h5>
          </div>
          <div>
            <a href="mailto:janleopro@gmail.com" target="_blank" rel="noopener noreferrer">
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
  // const { t }: { t: TFunction } = useTranslation();
  return (
    <Skills />
  );
}

/**
 * Display an icon that links to social media
 * @param props info about the social media (href, icon)
 */
function IconSocial(props: { href: string | undefined; icon: React.ReactNode; }): ReactElement {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconContext.Provider value={{ size: "3em" }}>
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
              <Figure>
                <Figure.Image
                  height="60%"
                  width="60%"
                  alt="171x180"
                  src={image}
                  roundedCircle
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
function Projects() {
  const { t }: { t: TFunction } = useTranslation();

  return (
    <Container id="Projects" className="pt-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 mytitle rounded">
          <h2 className="">{t("navbar.projects")}</h2>
        </Col>
      </Row>
      <Row className="pt-5 justify-content-center">
        <Col xs={12} md>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={webCV}
            />
          </Figure>
        </Col>
        <Col xs={12} md className="align-self-center pr-5">
          <h3>{t('projects.0.title')}</h3>
          <p className="text-left">{t('projects.0.body')}</p>
          <a
            href="https://github.com/TheTisiboth/WebCV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <div>
                <FaGithub />
              </div>
            </IconContext.Provider>
          </a>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md>
          <Figure>
            <Figure.Image
              height="60%"
              width="60%"
              alt="171x180"
              src={coloricm}
            />
          </Figure>
        </Col>
        <Col xs={12} md className="align-self-center pr-5">
          <h3>{t('projects.1.title')}</h3>
          <p className="text-left">{t('projects.1.body')}</p>
          <a
            href="https://github.com/TheTisiboth/PLA_2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <div>
                <FaGithub />
              </div>
            </IconContext.Provider>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

/**
 * Contains Education and professionnal experience
 */
function History() {
  const { t } = useTranslation();
  return (

    <Container id="History" className="pt-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 mytitle rounded">
          <h2 >{t('navbar.history')}</h2>
        </Col>
      </Row>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText={t("experiences.0.date")}
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >


          <h4>{t("experiences.0.title")}</h4>
          <a href="https://www.enovacom.fr/" target="_blank" rel="noopener noreferrer">
            <Figure id="enovacom">
              <Figure.Image
                height="75%"
                width="75%"
                alt="171x180"
                src={enovacom}
              />
            </Figure>
          </a>
          <p className="text-left">
            <Trans i18nKey="experiences.0.body">
              <strong>Software internationalization</strong> : Adapt the
              software to communicate thanks to a communication protocol.
              Software development (Java).
            </Trans>
          </p>

        </TimelineItem>
        <TimelineItem
          key="002"
          dateText={t("experiences.1.date")}
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >

          <h4>{t("experiences.1.title")}</h4>
          <a href="https://www.motionpictures.org/" target="_blank" rel="noopener noreferrer">
            <Figure className="mt-4">
              <Figure.Image
                height="20%"
                width="20%"
                alt="171x180"
                src={mpaa}
              />
            </Figure>
          </a>
          <p className="text-left">
            <Trans i18nKey="experiences.1.body">
              <strong>Automatisation of Web investigation </strong>: Website
              creation, in order to centralize multiple scripts that automatize
              the investigation about some infringing website, which are puting
              some illegal content on internet. Web Programmation (Jquery, PHP,
              Python ...)
            </Trans>
          </p>

        </TimelineItem>
        <TimelineItem
          key="003"
          dateText={t("education.0.date")}
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          style={{ color: '#61b8ff' }}

        >
          <h4>{t("education.0.title")}</h4>
          <p className="text-left">{t("education.0.body")}</p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText={t("experiences.2.date")}
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h4>{t("experiences.2.title")}</h4>
          <p className="text-left">
            <Trans i18nKey="experiences.2.body">
              <strong>Software internationalization</strong> : Adapt the
              software to communicate thanks to a communication protocol.
              Software development (Java).
            </Trans>
          </p>

        </TimelineItem>
        <TimelineItem
          key="005"
          dateText={t("experiences.3.date")}
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h4>{t("experiences.3.title")}</h4>
          <p className="text-left">
            <Trans i18nKey="experiences.3.body">
              <strong>Software internationalization</strong> : Adapt the
              software to communicate thanks to a communication protocol.
              Software development (Java).
            </Trans>
          </p>

        </TimelineItem>
        <TimelineItem
          key="006"
          dateText={t("education.1.date")}
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          style={{ color: '#61b8ff' }}

        >
          <h4>{t("education.1.title")}</h4>
          <p className="text-left">{t("education.1.body")}</p>
        </TimelineItem>
        <TimelineItem
          key="007"
          dateText={t("education.2.date")}
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          style={{ color: '#61b8ff' }}

        >
          <h4>{t("education.2.title")}</h4>
          <p className="text-left">{t("education.2.body")}</p>
        </TimelineItem>
        <TimelineItem
          key="008"
          dateText={t("experiences.4.date")}
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h4>{t("experiences.4.title")}</h4>
          <p className="text-left">
            <Trans i18nKey="experiences.4.body">
              <strong>Software internationalization</strong> : Adapt the
              software to communicate thanks to a communication protocol.
              Software development (Java).
            </Trans>
          </p>

        </TimelineItem>
      </Timeline>
    </Container>
  );
}

function Hobbies() {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="pt-5 mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 mytitle rounded">
          <h3>{t('navbar.hobbies')}</h3>
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
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <GiFrisbee />{" "}
                    <span className="ml-2 ">{t("hobbies.frisbee")}</span>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <img
                      height="20px"
                      src={Badminton}
                      alt=""
                    />
                    <span className="ml-2 ">
                      {t("hobbies.badminton")}
                    </span>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <FaBasketballBall />{" "}
                    <span className="ml-2 ">Basket-ball</span>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <FaTableTennis />{" "}
                    <span className="ml-2 ">{t("hobbies.pingpong")}</span>
                  </li>
                </ul>
              </li>
              <li>
                <h5>{t("hobbies.read")}</h5>
              </li>
              <li>
                <h5>{t("hobbies.music")}</h5>
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
        <Col xs={6} className="pt-2 pb-2 mytitle rounded">
          <h2 className="">{t("navbar.travel")}</h2>
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


function Footer() {
  const scrollOptions = {
    smooth: true,
    offset: -40,
    duration: 500,
  };
  return (
    <Container>
      <ListGroup horizontal  className="justify-content-center copyright pt-2">
        <ListGroup.Item className="copyright" variant="dark">© 2020 Copyright: Léo Jan</ListGroup.Item>

      </ListGroup>
      <Row>
        <Col>
          <Nav.Link className="" href="#App" onSelect={() => scroller.scrollTo('App', scrollOptions)}>
            Retour en haut
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

      <section className="grey">
        <Projects />
      </section>
      <section>
        <History />
      </section>
      <section>
        <Hobbies />
      </section>
      <section className="grey">
        <Travel />
      </section>
      <WIP />
      <section className="App-footer">
        <Footer />
      </section>
    </div>
  );
}

function WIP(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  return (
    <Container className="mt-4">
      <Row className="mb-2 justify-content-center">
        <Col md={6} className="mytitle rounded pt-2 pb-2">
          <h2 className="">{t("wip.title")}</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="">
          <h5>{t("wip.body")}</h5>
        </Col>
      </Row>
    </Container>
  );
}

// loading component for suspense fallback
const Loader = (): ReactElement => (
  <div className="App">
    {/* <img src={logoLoader} className="App-logo" alt="logo" />
    <div>loading...</div> */}
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App(): ReactElement {

  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
