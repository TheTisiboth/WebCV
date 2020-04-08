import React, { Component, Suspense, useState, useCallback, ReactElement, Fragment } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import logoLoader from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Row, Col, Container, Figure, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Map, Marker, Popup, TileLayer, Tooltip as TooltipL } from 'react-leaflet';
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
import { Icon } from "leaflet";

// import 'leaflet/dist/leaflet.css'
import image from './assets/leo.jpg';
import logo from './assets/logo.png';
import CV_FR from './assets/CV_FR_Leo_Jan.pdf';
import CV_EN from './assets/CV_EN_Leo_Jan.pdf';
import C from './assets/c.png';
import JAVA from './assets/java.png';
import PYTHON from './assets/python.png';
import OCAML from './assets/ocaml.jpg';
import ARM from './assets/arm2.png';
import BOOTSTRAP from './assets/bootstrap.png';
import CSS from './assets/css.png';
import HTML from './assets/html.png';
import JQUERY from './assets/jquery.png';
import MONGODB from './assets/mongodb.png';
import NODE from './assets/node.png';
import ANGULAR from './assets/angular.png';
import PHP from './assets/php.svg';
import SQL from './assets/sql.png';
import TYPESCRIPT from './assets/typescript.svg';
import REACT from './assets/react.svg';
import GIT from './assets/git.png';
import LINUX from './assets/linux.svg';
import ARDUINO from './assets/arduino.svg';
import L from 'leaflet';
require('./global.d.ts');

/**
 * Translation button, that translate the whole page. It switches between english (by default) and french
 */
function TranslationButton(): ReactElement<any> {
  const [state, setState] = useState({
    isEnglish: true,
    buttonLabel: 'en'
  });
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => { // Change the language of the whole page
    i18n.changeLanguage(lng);
  };

  const handleClick =
    () => {
      const isEnglish = !state.isEnglish;
      const buttonLabel = (isEnglish) ? 'en' : 'fr'
      setState({
        isEnglish: isEnglish,
        buttonLabel: buttonLabel
      });
      changeLanguage(buttonLabel);
    }

  const renderTooltip = (propss: any) => {
    return (
      <Tooltip id="button-tooltip" {...propss}>
        {t('translationTooltip')}
      </Tooltip>
    );
  }

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 0, hide: 0 }}
      overlay={renderTooltip}
    >
      <Button className="m-auto" variant="outline-light" onClick={handleClick}>{state.buttonLabel}</Button>
    </OverlayTrigger>
  );
}


function MyNavbar(): ReactElement<any> {
  const { t } = useTranslation();

  const renderTooltip = (propss: any) => {
    return (
      <Tooltip id="button-tooltip" {...propss}>
        {propss}
      </Tooltip>
    );
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40%"
          height="40%"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="display-5" href="#features">{t('navbar.presentation')}</Nav.Link>
          <Nav.Link className="display-5" href="#">{t('navbar.education')}</Nav.Link>
          <Nav.Link className="display-5" href="#">{t('navbar.experience')}</Nav.Link>
          <NavDropdown className="display-5" title={t('navbar.skill')} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href={CV_FR} download >
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 0, hide: 0 }}
              overlay={renderTooltip(t('cvFrTooltip'))}
            >
              <Button className="text-white" variant="outline-secondary" >CV FR</Button>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link href={CV_EN} download>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 0, hide: 0 }}
              overlay={renderTooltip(t('cvEnTooltip'))}
            >
              <Button className="text-white mr-5" variant="outline-secondary" >CV EN</Button>
            </OverlayTrigger>
          </Nav.Link>
          <TranslationButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function LeftHeader(): ReactElement<any> {
  const { t } = useTranslation();
  return (
    <div >
      <div className="name">
        <h1 className="display-4">Léo Jan</h1>
      </div>
      <div>
        <h2>{t('me.work')}</h2>
      </div>
      <div>
        <h3 >{t('me.age')}</h3>
      </div>
    </div>
  );
}

function RightHeader(): ReactElement<any> {
  const { t } = useTranslation();
  return (
    <div >
      <div className="name">
        <h2>Polytech Grenoble</h2>
      </div>
      <div>
        <h2>{t('me.livesIn')}</h2>
      </div>
      <div>
        <h3 >janleopro@gmail.com</h3>
      </div>
    </div>
  );
}

function Skill(props: { href: string | undefined; tooltip: any; image: string | undefined; }) {

  const renderTooltip = (propss: any) => {
    return (
      <Tooltip id="button-tooltip" {...propss}>
        {propss}
      </Tooltip>
    );
  }
  return (

    <a href={props.href} target="_blank" className="m-5 mt-5">
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

function Skills() {
  const { t } = useTranslation();
  return (
    <Row>

      <Col md={4}>
      </Col>
      <Col md={4}>
        <div className="title rounded display-3 ">
          {t('navbar.skill')}
        </div>
      </Col>
      <Col md={4}>
      </Col>


      <Row>

        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h2>{t('skills.system')}</h2>
            </Col>
          </Row>
          <Row>
            <Col >
              <Skill image={C} href="https://en.wikipedia.org/wiki/C_(programming_language)" tooltip="C" />
              <Skill image={ARM} href="https://www.arm.com/products/silicon-ip-cpu" tooltip="ARM" />
              <Skill image={ARDUINO} href="https://www.arduino.cc/" tooltip="Arduino" />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h2>{t('skills.software')}</h2>
            </Col>
          </Row>
          <Row>
            <Col >
              <Skill image={JAVA} href="https://www.java.com/fr/" tooltip="Java" />
              <Skill image={PYTHON} href="https://www.python.org/" tooltip="Python" />
              <Skill image={OCAML} href="https://ocaml.org/" tooltip="Ocaml" />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h2>{t('skills.web')}</h2>
            </Col>
          </Row>
          <Row>
            <Col  >
              <Skill image={HTML} href="https://en.wikipedia.org/wiki/HTML" tooltip="HTML" />
              <Skill image={CSS} href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" tooltip="CSS" />
              <Skill image={BOOTSTRAP} href="https://getbootstrap.com/" tooltip="Bootstrap" />
              <Skill image={TYPESCRIPT} href="https://www.typescriptlang.org/" tooltip="Typescript" />
              <Skill image={ANGULAR} href="https://angular.io/" tooltip="Angular" />
              <Skill image={REACT} href="https://reactjs.org/" tooltip="React" />
              <Skill image={MONGODB} href="https://www.mongodb.com/" tooltip="MongoDB" />
              <Skill image={NODE} href="https://nodejs.org/" tooltip="Nodejs" />
              <Skill image={JQUERY} href="https://jquery.com/" tooltip="JQuery" />
              <Skill image={PHP} href="https://www.php.net/" tooltip="PHP" />
              <Skill image={SQL} href="https://en.wikipedia.org/wiki/SQL" tooltip="SQL" />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md={3}>
          <Row>
            <Col>
              <h2>{t('skills.other')}</h2>
            </Col>
          </Row>
          <Row>
            <Col >
              <Skill image={GIT} href="https://git-scm.com/" tooltip="Git" />
              <Skill image={LINUX} href="https://www.linux.org/" tooltip="Linux" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
}

function Experience() {
  const { t } = useTranslation();
  return (
    <Container>

      <Row className="mb-2">
        <Col md={4}>
        </Col>
        <Col md={4} className="title rounded">
          <div className="display-3">
            {t('navbar.experience')}
          </div>
        </Col>

        <Col md={4}>
        </Col>
      </Row>
      <Row>
        <Col>


          <h2>{t('experiences.0.title')}</h2>
          <p>
            <Trans i18nKey="experiences.0.body">
              <strong>Software internationalization</strong> : Adapt the software to communicate thanks to a communication protocol. Software development (Java).
                 </Trans>
          </p>

        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{t('experiences.1.title')}</h2>
          <p>
            <Trans i18nKey="experiences.1.body">
              <strong>Automatisation of Web investigation </strong>: Website creation, in order to centralize multiple
              scripts that automatize the investigation about some infringing website, which are
              puting some illegal content on internet. Web Programmation (Jquery, PHP,
              Python ...)
          </Trans>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

function AppHeader() {
  return (
    <Container fluid>
      <Row className="App-header">
        <Row>
          <Col sm={12} md={3} className="m-auto text-right">
            <LeftHeader />
          </Col>
          <Col sm={12} md={6}>
            <Figure>
              <Figure.Image
                height="40%"
                width="40%"
                alt="171x180"
                src={image}
                roundedCircle
              />
            </Figure>
          </Col>
          <Col sm={12} md={3} className="m-auto text-left">
            <RightHeader />
          </Col>
        </Row>

      </Row>
      <Row className="App-header text-center">
        <Col className="text-right">
          <a href="https://www.linkedin.com/in/l%C3%A9o-jan-065ba8125/" target="_blank">
            <IconContext.Provider value={{ size: "5em" }}>
              <div>
                <FaLinkedin />
              </div>
            </IconContext.Provider>
          </a>
        </Col>
        <Col className="text-left">
          <a href="https://github.com/TheTisiboth" target="_blank">
            <IconContext.Provider value={{ size: "5em" }}>
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

// type Position = [number, number];

// type Props = {
//   content: string,
//   position: Position,
// };

// type MarkerData = { Props: Props, key: string |};

// const MyPopupMarker = ({ content, position }: Props) => (
//   <Marker position={position}>
//     <Popup>{content}</Popup>
//   </Marker>
// )

// const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
//   const items = markers.map(({ key, ...props }) => (
//     <MyPopupMarker key={key} {...props} />
//   ))
//   return <Fragment>{items}</Fragment>
// }

function Travel() {
  const { t } = useTranslation();
  const positions = [43.3, 5.4];
  const icon = new Icon({
    iconUrl: JAVA,
    iconSize: [25, 25]
  });

  function countryToString(countrys: Array<string>) {
    const country = countrys.shift();
    let s = '';
    countrys.forEach(c => {
      s += c + ', ';
    });
    s += country;
    return s;
  }

  const country =
    [
      {
        // germany
        lat: 51.0834196,
        lon: 10.4234469,
        tooltip: countryToString([
          t('travel.germany.country'),
          t('travel.germany.munich'),
          t('travel.germany.berlin'),
          t('travel.germany.hamburg'),
          t('travel.germany.munster')
        ])
      },
      {
        // tchequie
        lat: 50.05708312988281,
        lon: 14.44813060760498,
        tooltip: countryToString([
          t('travel.tchequie.country'),
          t('travel.tchequie.prague'),
        ])
      },
      {
        // belgium
        lat: 50.6402809,
        lon: 4.6667145,
        tooltip: countryToString([
          t('travel.belgium.country'),
          t('travel.belgium.brussels'),
          t('travel.belgium.liege')
        ])
      },
      {
        // canada
        lat: 61.0666922,
        lon: -107.9917071,
        tooltip: countryToString([
          t('travel.canada.country'),
          t('travel.canada.montreal'),
          t('travel.canada.quebec'),
          t('travel.canada.sherbrooke'),
          t('travel.canada.tadoussac')
        ])
      },
      {
        // spain
        lat: 39.3262345,
        lon: -4.8380649,
        tooltip: countryToString([
          t('travel.spain.country'),
          t('travel.spain.barcelona'),
          t('travel.spain.palma'),
        ])
      },
      {
        // italy
        lat: 42.6384261,
        lon: 12.674297,
        tooltip: countryToString([
          t('travel.italy.country'),
          t('travel.italy.roma'),
          t('travel.italy.naples'),
          t('travel.italy.pompei')
        ])
      },
      {
        // greece
        lat: 38.9953683,
        lon: 21.9877132,
        tooltip: countryToString([
          t('travel.greece.country'),
          t('travel.greece.athens'),
          t('travel.greece.corinth'),
        ])
      },
      {
        // us
        lat: 42.92121887207031,
        lon: -75.62081909179688,
        tooltip: countryToString([
          t('travel.us.country'),
          t('travel.us.ny')
        ])
      },
      {
        // uk
        lat: 52.865196,
        lon: -7.9794599,
        tooltip: countryToString([
          t('travel.uk.country'),
          t('travel.uk.ireland')
        ])
      },
      {
        // fr
        lat: 43.2961743,
        lon: 5.3699525,
        tooltip: countryToString([
          t('travel.fr.country'),
          t('travel.fr.marseille')
        ])
      },
    ];
  // const markers = [
  //   { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
  //   { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
  //   { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
  // ];

  return (
    <Container>
      <Row className="mb-4">
        <Col md={4}>
        </Col>
        <Col md={4} className="title rounded">
          <div className="display-3">
            {t('navbar.travel')}
          </div>
        </Col>

        <Col md={4}>
        </Col>
      </Row>
      <Row>
        <Col>
          <Map style={{ width: '100%', height: '500px' }} center={[54.370138916189596, -29.918133437500003]} zoom={3}>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            />
            {country.map(c => {
              return <Marker position={[c.lat, c.lon]}>
                <Popup>
                  <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                </Popup>
                <TooltipL>{c.tooltip}</TooltipL>
              </Marker>
            })}
          </Map>
        </Col >>
    </Row >
    </Container>
  );
}

function WIP() {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="mb-2">
        <Col md={3}>
        </Col>
        <Col md={6} className="title rounded">
          <div className="display-3">
            {t('wip.title')}
          </div>
        </Col>

        <Col md={3}>
        </Col>
      </Row>
      <Row>
        <Col className="display-4">
          {t('wip.body')}
        </Col>
      </Row>
    </Container>
  );
}

// page uses the hook
function Page(): ReactElement<any> {
  return (
    <div className="App">
      <MyNavbar />

      <AppHeader />

      <div className="App-intro">

        <Skills />

        <Experience />
        <Travel />
        {/* <WIP /> */}
      </div>
    </div>
  );
}

// loading component for suspense fallback
const Loader = (): ReactElement<any> => (
  <div className="App">
    {/* <img src={logoLoader} className="App-logo" alt="logo" />
    <div>loading...</div> */}
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App(): ReactElement<any> {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
