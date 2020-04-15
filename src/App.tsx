import React, { Suspense, useState, ReactElement, useCallback } from "react";
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
  NavDropdown
} from "react-bootstrap";
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
function TranslationButton(): ReactElement {
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

  return (
    <Navbar collapseOnSelect={true} expand="md" bg="dark" variant="dark" className="pt-0 pb-0" >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40%"
          height="40%"
          className="d-inline-block align-top"
        />{" "}

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="pb-3 pb-md-0">
        <Nav className="mr-auto">
          <Nav.Link className="" href="#Skills">
            {t("navbar.skill")}
          </Nav.Link>
          <Nav.Link className="" href="#Projects">
            {t("navbar.projects")}
          </Nav.Link>
          <Nav.Link className="" href="#Experiences">
            {t("navbar.experience")}
          </Nav.Link>
          <Nav.Link className="" href="#Education">
            {t("navbar.education")}
          </Nav.Link>
          <Nav.Link className="" href="#Travels">
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
          <Nav.Link>
            <TranslationButton />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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
        <Col xs={5} md={12} className="pr-0 pl-0">
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
        <Col xs={6} md={12} className="align-self-center mt-md-5 pr-0 pl-0">
          <div className="name">
            <h5>Polytech Grenoble</h5>
          </div>
          <div>
            <h5>{t("me.livesIn")}</h5>
          </div>
          <div>
            <h5>janleopro@gmail.com</h5>
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
                  height="50%"
                  width="50%"
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
    <Container fluid id="Projects" className="pt-5 grey pl-md-5 pr-md-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 title rounded">
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
 * Experience section
 */
function Experience(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  return (
    <Container fluid id="Experiences" className="pt-5 pl-md-5 pr-md-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={7} className="pt-2 pb-2 title rounded">
          <h2 >
            {t("navbar.experience")}
          </h2>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col md>
          <Figure>
            <Figure.Image
              height="30%"
              width="30%"
              alt="171x180"
              src={enovacom}
            />
          </Figure>
        </Col>
        <Col md>
          <h3>{t("experiences.0.title")}</h3>
          <p className="text-left">
            <Trans i18nKey="experiences.0.body">
              <strong>Software internationalization</strong> : Adapt the
              software to communicate thanks to a communication protocol.
              Software development (Java).
            </Trans>
          </p>
        </Col>
      </Row>
      <Row className="pt-5 pb-5">
        <Col md className="align-self-center">
          <Figure>
            <Figure.Image
              height="20%"
              width="20%"
              alt="171x180"
              src={mpaa}
            />
          </Figure>
        </Col>
        <Col md className="align-self-center">
          <h3>{t("experiences.1.title")}</h3>
          <p className="text-left">
            <Trans i18nKey="experiences.1.body">
              <strong>Automatisation of Web investigation </strong>: Website
              creation, in order to centralize multiple scripts that automatize
              the investigation about some infringing website, which are puting
              some illegal content on internet. Web Programmation (Jquery, PHP,
              Python ...)
            </Trans>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

/**
 * Education section
 */
function Education(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  return (
    <Container fluid id="Education" className="pt-5 grey pl-md-5 pr-md-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 title rounded">
          <h2 >{t("navbar.education")}</h2>
        </Col>
      </Row>

      <Row className="pt-5 text-left justify-content-center">
        <Col md={8}>
          <h3>{t("education.0.title")}</h3>
          <p className="text-left">{t("education.0.body")}</p>
        </Col>
      </Row>

      <Row className="text-left justify-content-center pt-3">
        <Col md={8}>
          <h3>{t("education.1.title")}</h3>
          <p className="text-left">{t("education.1.body")}</p>
        </Col>
      </Row>

      <Row className="pb-5 text-left justify-content-center pt-3">
        <Col md={8}>
          <h3>{t("education.2.title")}</h3>
          <p className="text-left">{t("education.2.body")}</p>
        </Col>
      </Row>
    </Container>
  );
}


function Hobbies() {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="pt-5 mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 title rounded">
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
    <Container fluid id="Travels" className="grey pt-5 pb-4 pl-md-5 pr-md-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 title rounded">
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

// page uses the hook
function Page(): ReactElement {
  return (
    <div className="App">
      <MyNavbar />

      <AppHeader />

      <Projects />

      <Experience />

      <Education />

      <Hobbies />

      <Travel />

      <WIP />
    </div>

  );
}

function WIP(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();
  return (
    <Container className="mt-4">
      <Row className="mb-2 justify-content-center">
        <Col md={6} className="title rounded pt-2 pb-2">
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
