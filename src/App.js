import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import logoLoader from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Image, Row, Col, Container, Figure, OverlayTrigger, Tooltip } from 'react-bootstrap'
import image from './assets/leo.jpg';
import logo from './assets/logo.png';
import CV_FR from './assets/CV_FR_Leo_Jan.pdf';
import CV_EN from './assets/CV_EN_Leo_Jan.pdf';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

/**
 * Translation button, that translate the whole page. It switches between english (by default) and french
 */
class TranslationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEnglish: true };
    this.buttonLabel = 'en';
    this.changeLanguage = lng => { // Change the language of the whole page
      this.props.i18n.changeLanguage(lng);
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderTooltip = this.renderTooltip.bind(this);

  }

  handleClick() {
    const isEnglish = this.state.isEnglish ? false : true;
    this.buttonLabel = (isEnglish) ? 'en' : 'fr'
    this.changeLanguage(this.buttonLabel)
    this.setState({ isEnglish: isEnglish })
  }

  renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        {this.props.i18n.t('translationTooltip')}
      </Tooltip>
    );
  }

  render() {

    return (
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={this.renderTooltip}
      >
        <Button className="m-auto" variant="outline-light" onClick={this.handleClick}>{this.buttonLabel}</Button>
      </OverlayTrigger>
    );
  }
}




const _TranslationButton = withTranslation()(TranslationButton);

function MyNavbar() {
  const { t, i18n } = useTranslation();

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
          <Nav.Link href="#features">{t('navbar.presentation')}</Nav.Link>
          <Nav.Link href="#pricing">{t('navbar.education')}</Nav.Link>
          <Nav.Link href="#pricing">{t('navbar.experience')}</Nav.Link>
          <NavDropdown title={t('navbar.skill')} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href={CV_FR} download><Button className="text-white" variant="outline-secondary" >CV FR</Button></Nav.Link>
          <Nav.Link href={CV_EN} download><Button className="text-white mr-5" variant="outline-secondary" >CV EN</Button></Nav.Link>
          <_TranslationButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t, i18n } = this.props;
    return <h2>{t('title')}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1" />

  );
}

function LeftHeader() {
  const { t, i18n } = useTranslation();
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

function RightHeader() {
  const { t, i18n } = useTranslation();
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

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <MyNavbar />
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
            <a href="https://www.linkedin.com/in/l%C3%A9o-jan-065ba8125/">
              <IconContext.Provider value={{ size: "5em" }}>
                <div>
                  <FaLinkedin />
                </div>
              </IconContext.Provider>
            </a>
          </Col>
          <Col className="text-left">
            <a href="https://github.com/TheTisiboth">
              <IconContext.Provider value={{ size: "5em" }}>
                <div>
                  <FaGithub />
                </div>
              </IconContext.Provider>
            </a>
          </Col>
        </Row>

      </Container>
      <Welcome />

      <div className="App-intro">
        <MyComponent />
      </div>
      {/* <div>{t('description.part2')}</div> */}
    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logoLoader} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
