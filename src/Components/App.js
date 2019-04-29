import React from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/GlobalStyles';
import Lang from './context';
import translations from './translations';
import * as Constants from 'Constants';

function App() {
  return (
    <Lang defaultLang={Constants.LANGUAGES.ENG} translations={translations}>
      <Router />
      <GlobalStyles />
    </Lang>
  );
}

export default App;
