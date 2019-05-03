import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faLanguage,
  faUserFriends,
  faPiggyBank,
  faCommentDollar,
} from '@fortawesome/free-solid-svg-icons';
import * as Constants from '../Constants';
import GlobalStyles from './GlobalStyles';
import Router from './Router';
import translations from './translations';
import Lang from './context';

library.add(fab, faLanguage, faUserFriends, faPiggyBank, faCommentDollar);

function App() {
  return (
    <Lang defaultLang={Constants.LANGUAGES.EN.code} translations={translations}>
      <Router />
      <GlobalStyles />
    </Lang>
  );
}

export default App;
