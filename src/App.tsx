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
      <Button className="m-auto" variant="outline-light" onClick={handleClick}>
        {state.buttonLabel}
      </Button>
    </OverlayTrigger>
  );
}

function MyNavbar(): ReactElement {
  const { t } = useTranslation();

  return (
    <Navbar collapseOnSelect={true} expand="md" bg="dark" variant="dark">
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
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="display-5" href="#Skills">
            {t("navbar.skill")}
          </Nav.Link>
          <Nav.Link className="display-5" href="#Experiences">
            {t("navbar.experience")}
          </Nav.Link>
          <Nav.Link className="display-5" href="#Education">
            {t("navbar.education")}
          </Nav.Link>
          <Nav.Link className="display-5" href="#Travels">
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
              <Button className="text-white" variant="outline-secondary">
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
                className="text-white mr-md-5 mb-3 mb-md-0"
                variant="outline-secondary"
              >
                CV EN
              </Button>
            </OverlayTrigger>
          </Nav.Link>
          <TranslationButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function LeftHeader(): ReactElement {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col>
          <div className="name">
            <h1 className="display-4">Léo Jan</h1>
          </div>
          <div>
            <h2>{t("me.work")}</h2>
          </div>
          <div>
            <h3>{t("me.age")}</h3>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <div className="name">
            <h2>Polytech Grenoble</h2>
          </div>
          <div>
            <h2>{t("me.livesIn")}</h2>
          </div>
          <div>
            <h3>janleopro@gmail.com</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function RightHeader(): ReactElement {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col>
          <div className="name">
            <h1>Hobbies</h1>
            <ul>
              <li>
                <h2>IT</h2>
              </li>
              <li className="sports">
                <h2>Sports</h2>
                <ul>
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <GiFrisbee />{" "}
                    <span className="ml-2 sports">{t("hobbies.frisbee")}</span>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <img
                      className="badminton"
                      height="20px"
                      src={Badminton}
                      alt=""
                    />
                    <span className="ml-2 sports">
                      {t("hobbies.badminton")}
                    </span>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <FaBasketballBall />{" "}
                    <span className="ml-2 sports">Basket-ball</span>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    {" "}
                    <FaTableTennis />{" "}
                    <span className="ml-2 sports">{t("hobbies.pingpong")}</span>
                  </li>
                </ul>
              </li>
              <li>
                <h2>{t("hobbies.read")}</h2>
              </li>
              <li>
                <h2>{t("hobbies.music")}</h2>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function AppHeader(): ReactElement {
  return (
    <Container fluid={true} className="App-header">
      <Row>
        <Col sm={12} md={4} className="mt-5 text-right">
          <LeftHeader />
        </Col>
        <Col sm={12} md={4}>
          <Row>
            <Figure>
              <Figure.Image
                height="50%"
                width="50%"
                alt="171x180"
                src={image}
                roundedCircle={true}
              />
            </Figure>
          </Row>
          <Row className="App-header text-center">
            <Col className="text-right">
              <a
                href="https://www.linkedin.com/in/l%C3%A9o-jan-065ba8125/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: "5em" }}>
                  <div>
                    <FaLinkedin />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="">
              <a
                href="https://github.com/TheTisiboth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: "5em" }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-left">
              <a
                href="https://gitlab.com/TheTisiboth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: "5em" }}>
                  <div>
                    <AiOutlineGitlab />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={4} className="mt-5 text-left">
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
      className="m-5 mt-5"
    >
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 0, hide: 0 }}
        overlay={renderTooltip(props.tooltip)}
      >
        <Figure>
          <Figure.Image
            width={50}
            height={50}
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
    <Container fluid={true}>
      <Row id="Skills" className="justify-content-md-center">
        <Col md={6}>
          <div className="title rounded display-3 ">{t("navbar.skill")}</div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h2>{t("skills.system")}</h2>
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
              <h2>{t("skills.software")}</h2>
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
              <h2>{t("skills.web")}</h2>
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
              <h2>{t("skills.other")}</h2>
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
      <Row className="mb-2 justify-content-md-center">
        <Col md={8} className="">
          <div className="display-3 title rounded">
            {t("navbar.experience")}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{t("experiences.0.title")}</h2>
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
          <h2>{t("experiences.1.title")}</h2>
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

function Travel(): ReactElement {
  const { t } = useTranslation();

  return (
    <Container fluid={true} id="Travels">
      <Row className="mb-4 justify-content-md-center">
        <Col md={4} className="title rounded">
          <div className="display-3">{t("navbar.travel")}</div>
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

function Education(): ReactElement {
  const { t } = useTranslation();
  return (
    <div id="Education" className="">
      <Row className="mb-2 justify-content-md-center">
        <Col md={8} className="">
          <div className="display-3 title rounded">{t("navbar.education")}</div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>{t("education.0.title")}</h2>
          <p>{t("education.0.body")}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>{t("education.1.title")}</h2>
          <p>{t("education.1.body")}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>{t("education.2.title")}</h2>
          <p>{t("education.2.body")}</p>
        </Col>
      </Row>
    </div>
  );
}

function WIP(): ReactElement {
  const { t } = useTranslation();
  return (
    <Container fluid={true} className="mt-4">
      <Row className="mb-2 justify-content-center">
        <Col md={6} className="title rounded">
          <div className="display-3">{t("wip.title")}</div>
        </Col>
      </Row>
      <Row>
        <Col className="display-4">{t("wip.body")}</Col>
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

      <Container fluid={true}>
        <Row className="mr-0">
          <Col className="">
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
