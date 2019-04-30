import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import About from "Routes/About";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Search from "Routes/Search";
import Support from "Routes/Support";
import Detail from "Routes/Detail";
import Terms from "Routes/Terms";

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