import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Constants from 'Constants';

const Footer = styled.footer``;

let COPYRIGHT = Constants.COPYRIGHT;
let CONST_TERMS = Constants.TERMS_EN;
let CONST_FAMILY_SITE = Constants.FAMILY_SITE_EN;
let CONST_RELATED_SITE = Constants.RELATED_SITE_EN;

if (Constants.LANGUAGE === 'KO') {
  CONST_TERMS = Constants.TERMS_KO;
  CONST_FAMILY_SITE = Constants.FAMILY_SITE_KO;
  CONST_RELATED_SITE = Constants.RELATED_SITE_KO;
}

export default withRouter(({ location: { pathname } }) => (
  <Footer>
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-center">
      <Navbar.Brand> {COPYRIGHT} </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/terms">{CONST_TERMS}</Link>
          </Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown
            title={CONST_FAMILY_SITE}
            id="collasible-nav-dropdown"
            drop="up">
            <NavDropdown.Item href="http://www.ksd.or.kr" target="_blank">
              KSD
            </NavDropdown.Item>
            <NavDropdown.Item href="https://evote.ksd.or.kr" target="_blank">
              K-eVote
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.seibro.or.kr" target="_blank">
              Seibro
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown
            title={CONST_RELATED_SITE}
            id="collasible-nav-dropdown"
            drop="up">
            <NavDropdown.Item href="http://www.fsc.go.kr/" target="_blank">
              금융위원회(FSC)
            </NavDropdown.Item>
            <NavDropdown.Item href="http://dart.fss.or.kr/" target="_blank">
              전자공시시스템(Dart)
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Footer>
));
