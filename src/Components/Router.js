import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import About from '../Routes/About';
import Movie from '../Routes/Movie';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Support from '../Routes/Support';
import Terms from '../Routes/Terms';

export default () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv" component={TV} />
        <Route path="/show/:id" component={Detail} />
        <Route path="/search" component={Search} />
        <Route path="/support" component={Support} />
        <Route path="/terms" component={Terms} />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
    <Footer />
  </Router>
);
