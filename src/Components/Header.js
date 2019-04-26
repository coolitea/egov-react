import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as Constants from "Constants";

const Header = styled.header``;

let CONST_SERVICE_NAME = Constants.SERVICE_NAME_EN;
let CONST_ABOUT = Constants.ABOUT_EN;
let CONST_MOVIE = Constants.MOVIE_EN;
let CONST_TV = Constants.TV_EN;
let CONST_SEARCH = Constants.SEARCH_EN;

if (Constants.LANGUAGE === "KO") {
  CONST_SERVICE_NAME = Constants.SERVICE_NAME_KO;
  CONST_ABOUT = Constants.ABOUT_KO;
  CONST_MOVIE = Constants.MOVIE_KO;
  CONST_TV = Constants.TV_KO;
  CONST_SEARCH = Constants.SEARCH_KO;
}

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Navbar bg="light" variant="light" collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand to="/">
        <Link to="/">{CONST_SERVICE_NAME}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Navbar.Text>
            <Link to="/about">{CONST_ABOUT}</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/movie">{CONST_MOVIE}</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/tv">{CONST_TV}</Link>
          </Navbar.Text>
          <Navbar.Text variant="light">
            <Link to="/search">{CONST_SEARCH}</Link>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Header>
));
