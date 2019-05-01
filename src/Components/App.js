import React from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/GlobalStyles';
import Lang from './context';
import translations from './translations';
import * as Constants from 'Constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUserFriends,
  faPiggyBank,
  faCommentDollar
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faUserFriends, faPiggyBank, faCommentDollar);

function App() {
  return (
    <Lang defaultLang={Constants.LANGUAGES.ENG} translations={translations}>
      <Router />
      <GlobalStyles />
    </Lang>
  );
}

export default App;
