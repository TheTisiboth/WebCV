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
  Tooltip,
} from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaLinkedin,
  FaGithub,
  FaBasketballBall,
  FaTableTennis,
} from "react-icons/fa";
import { GiFrisbee } from "react-icons/gi";
import { AiOutlineGitlab } from "react-icons/ai";
import CustomMap from "./customMap";
import image from "./assets/leo.jpg";
import logo from "./assets/logo.png";
import CV_FR from "./assets/CV_FR_Leo_Jan.pdf";
import CV_EN from "./assets/CV_EN_Leo_Jan.pdf";
import C from "./assets/c.png";
import JAVA from "./assets/java.png";
import PYTHON from "./assets/python.png";
import OCAML from "./assets/ocaml.jpg";
import ARM from "./assets/arm2.png";
import BOOTSTRAP from "./assets/bootstrap.png";
import CSS from "./assets/css.png";
import HTML from "./assets/html.png";
import JQUERY from "./assets/jquery.png";
import MONGODB from "./assets/mongodb.png";
import ANGULAR from "./assets/angular.png";
import PHP from "./assets/php.svg";
import SQL from "./assets/sql.png";
import REACT from "./assets/react.svg";
import GIT from "./assets/git.png";
import LINUX from "./assets/linux.svg";
import ARDUINO from "./assets/arduino.svg";
import Badminton from "./assets/badminton.png";
import webCV from "./assets/projects/webCV.png";
import coloricm from "./assets/projects/coloricm.png";

require("./global.d.ts");

const renderTooltip = (propss: string): ReactElement => {
  return <Tooltip id="button-tooltip">{propss}</Tooltip>;
};

/**
 * Translation button, that translate the whole page. It switches between english (by default) and french
 */
function TranslationButton(): ReactElement {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    isEnglish: i18n.language.includes("en"),
    buttonLabel: i18n.language.includes("en") ? "en" : "fr",
  });

  const changeLanguage = useCallback(
    (lng: string): any => {
      if (!i18n) {
        return;
      }
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const handleClick = (): any => {
    const isEnglish = !state.isEnglish;
    const buttonLabel = isEnglish ? "en" : "fr";
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
        {state.buttonLabel}
      </Button>
    </OverlayTrigger>
  );
}

function MyNavbar(): ReactElement {
  const { t } = useTranslation();


  return (
    <Navbar collapseOnSelect={true} expand="md" bg="dark" variant="dark" fixed="top" className="pt-0 pb-0">
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
        <Nav>
          <Nav.Link href={CV_FR} download={true}>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 0, hide: 0 }}
              overlay={renderTooltip(t("cvFrTooltip"))}
            >
              <Button className="text-white buttons" variant="outline-secondary">
                CV FR
              </Button>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link href={CV_EN} download={true}>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 0, hide: 0 }}
              overlay={renderTooltip(t("cvEnTooltip"))}
            >
              <Button
                className="text-white mr-md-5 mb-3 mb-md-0 buttons"
                variant="outline-secondary"
              >
                CV EN
              </Button>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link>
            <TranslationButton />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function LeftHeader(): ReactElement {
  const { t } = useTranslation();
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

function RightHeader(): ReactElement {
  const { t } = useTranslation();
  return (
    <div>
      <Row>
        <Col>
          <div className="name">
            <h3>Hobbies</h3>
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
                      className="badminton"
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
    </div>
  );
}

function AppHeader(): ReactElement {
  return (
    <Container fluid={true} className="App-header">
      <Row className="content-justify-center">
        <Col sm={12} md={4} className="m-auto text-md-right align-self-center">
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
              <a
                href="https://www.linkedin.com/in/l%C3%A9o-jan-065ba8125/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: "3em" }}>
                  <div>
                    <FaLinkedin />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col xs={4} className="">
              <a
                href="https://github.com/TheTisiboth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: "3em" }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col xs={4} className="text-left">
              <a
                href="https://gitlab.com/TheTisiboth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: "3em" }}>
                  <div>
                    <AiOutlineGitlab />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={4} className="m-auto text-left align-self-center">
          <RightHeader />
        </Col>
      </Row>
    </Container>
  );
}

function Skill(props: {
  href: string | undefined;
  tooltip: any;
  image: string | undefined;
}): ReactElement {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="m-2"
    >
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 0, hide: 0 }}
        overlay={renderTooltip(props.tooltip)}
      >
        <Figure>
          <Figure.Image
            width={40}
            height={40}
            alt="171x180"
            src={props.image}
          />
        </Figure>
      </OverlayTrigger>
    </a>
  );
}

function Skills(): ReactElement {
  const { t } = useTranslation();
  return (
    <Container >
      <Row id="Skills" className=" justify-content-center">
        <Col md={4} xs={8} className="pt-2 pb-2 title rounded">
          <h2 >{t("navbar.skill")}</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h3>{t("skills.system")}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Skill
                image={C}
                href="https://en.wikipedia.org/wiki/C_(programming_language)"
                tooltip="C"
              />
              <Skill
                image={ARM}
                href="https://www.arm.com/products/silicon-ip-cpu"
                tooltip="ARM"
              />
              <Skill
                image={ARDUINO}
                href="https://www.arduino.cc/"
                tooltip="Arduino"
              />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h3>{t("skills.software")}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Skill
                image={JAVA}
                href="https://www.java.com/fr/"
                tooltip="Java"
              />
              <Skill
                image={PYTHON}
                href="https://www.python.org/"
                tooltip="Python"
              />
              <Skill image={OCAML} href="https://ocaml.org/" tooltip="Ocaml" />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h3>{t("skills.web")}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Skill
                image={HTML}
                href="https://en.wikipedia.org/wiki/HTML"
                tooltip="HTML"
              />
              <Skill
                image={CSS}
                href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                tooltip="CSS"
              />
              <Skill
                image={BOOTSTRAP}
                href="https://getbootstrap.com/"
                tooltip="Bootstrap"
              />
              <Skill
                image={ANGULAR}
                href="https://angular.io/"
                tooltip="Angular"
              />
              <Skill
                image={REACT}
                href="https://reactjs.org/"
                tooltip="React"
              />
              <Skill
                image={MONGODB}
                href="https://www.mongodb.com/"
                tooltip="MongoDB"
              />
              <Skill
                image={JQUERY}
                href="https://jquery.com/"
                tooltip="JQuery"
              />
              <Skill image={PHP} href="https://www.php.net/" tooltip="PHP" />
              <Skill
                image={SQL}
                href="https://en.wikipedia.org/wiki/SQL"
                tooltip="SQL"
              />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h3>{t("skills.other")}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Skill image={GIT} href="https://git-scm.com/" tooltip="Git" />
              <Skill
                image={LINUX}
                href="https://www.linux.org/"
                tooltip="Linux"
              />
            </Col>
          </Row>
        </Col>
      </Row>

    </Container >
  );
}

function Experience(): ReactElement {
  const { t } = useTranslation();
  return (
    <div id="Experiences">
      <Row className="mb-2 justify-content-center">
        <Col xs={8} className="pt-2 pb-2 title rounded">
          <h2 >
            {t("navbar.experience")}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{t("experiences.0.title")}</h3>
          <p>
            <Trans i18nKey="experiences.0.body">
              <strong>Software internationalization</strong> : Adapt the
              software to communicate thanks to a communication protocol.
              Software development (Java).
            </Trans>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{t("experiences.1.title")}</h3>
          <p>
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
    </div>
  );
}

function Education(): ReactElement {
  const { t } = useTranslation();
  return (
    <div id="Education" className="">
      <Row className="mb-2 justify-content-center">
        <Col xs={8} className="pt-2 pb-2 title rounded">
          <h2 >{t("navbar.education")}</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>{t("education.0.title")}</h3>
          <p>{t("education.0.body")}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>{t("education.1.title")}</h3>
          <p>{t("education.1.body")}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>{t("education.2.title")}</h3>
          <p>{t("education.2.body")}</p>
        </Col>
      </Row>
    </div>
  );
}

function Travel(): ReactElement {
  const { t } = useTranslation();

  return (
    <Container id="Travels">
      <Row className="mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 title rounded">
          <h2 className="">{t("navbar.travel")}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <CustomMap />
        </Col>
      </Row>
    </Container>
  );
}

function Projects() {
  const { t } = useTranslation();

  return (
    <Container id="Projects">
      <Row className="mb-4 justify-content-center">
        <Col xs={6} className="pt-2 pb-2 title rounded">
          <h2 className="">{t("navbar.projects")}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
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
          <p>{t('projects.0.body')}</p>
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

      <Row className="justify-content-center mt-3 mb-3">
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
          <p>{t('projects.1.body')}</p>
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



// page uses the hook
function Page(): ReactElement {
  return (
    <div className="App">
      <MyNavbar />

      <AppHeader />

      <Skills />

      <Projects />

      <Container >
        <Row className="mr-0">
          <Col xs={12} md className="">
            <Experience />
          </Col>
          <Col>
            <Education />
          </Col>
        </Row>
      </Container>
      <Travel />
      <WIP />
    </div>

  );
}

function WIP(): ReactElement {
  const { t } = useTranslation();
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
