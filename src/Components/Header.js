import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// import NavDropdown from "react-bootstrap/NavDropdown";
import * as Constants from "Constants";

const Header = styled.header``;

let CONST_SERVICE_NAME = Constants.SERVICE_NAME_EN;
let CONST_MOVIE = Constants.MOVIE_EN;
let CONST_TV = Constants.TV_EN;
// let CONST_SAMPLE = Constants.SAMPLE_EN;
let CONST_SEARCH = Constants.SEARCH_EN;

if (Constants.LANGUAGE === "KO") {
  CONST_SERVICE_NAME = Constants.SERVICE_NAME_KO;
  CONST_MOVIE = Constants.MOVIE_KO;
  CONST_TV = Constants.TV_KO;
  // CONST_SAMPLE = Constants.SAMPLE_KO;
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
            <Link to="/movie">{CONST_MOVIE}</Link>
          </Navbar.Text>
          {}
          <Navbar.Text>
            <Link to="/tv">{CONST_TV}</Link>
          </Navbar.Text>
          <Navbar.Text variant="light">
            <Link to="/search">{CONST_SEARCH}</Link>
          </Navbar.Text>
          {/* 
          <NavDropdown title={CONST_SAMPLE} id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/sample/1-1">{CONST_SAMPLE} 1-1</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/sample/1-2">{CONST_SAMPLE} 1-2 </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/sample/1-3">{CONST_SAMPLE} 1-3</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/sample/2">{CONST_SAMPLE} 2</Link>
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Nav className="justify-content-end" activeKey="/home">
          <Form inline>
            <FormControl
              type="text"
              placeholder={CONST_SEARCH}
              className="mr-sm-2"
            />
            <Button variant="outline-light">{CONST_SEARCH}</Button>
          </Form>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  </Header>
));
