import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown,Button } from 'react-bootstrap'

/**
 * Translation button, that translate the whole page. It switches between english (by default) and french
 */
class TranslationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEnglish: true};
    this.buttonLabel = 'en'; 
    this.changeLanguage = lng => { // Change the language of the whole page
      this.props.i18n.changeLanguage(lng);
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const isEnglish = this.state.isEnglish ? false : true;
    this.buttonLabel = (isEnglish) ? 'en' : 'fr'
    this.changeLanguage(this.buttonLabel)
    this.setState({ isEnglish: isEnglish })
  }

  render() {
    return (
      <Button variant="outline-light" onClick={this.handleClick}>{this.buttonLabel}</Button>
    );
  }
}

const _TranslationButton = withTranslation()(TranslationButton);

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Léo Jan</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Présentation</Nav.Link>
          <Nav.Link href="#pricing">Scolarité</Nav.Link>
          <NavDropdown title="Compétences" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
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

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <MyNavbar />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Welcome />

      </div>
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
    <img src={logo} className="App-logo" alt="logo" />
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
