import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withTranslation, Trans } from 'react-i18next';

function App(props) {
  const { t, i18n } = props;
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          {t('welcome.title', { framework: "react-i18next" })}
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey='welcome.intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
            </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div>
        <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
    </div>

  );
}


export default withTranslation('common')(App);
