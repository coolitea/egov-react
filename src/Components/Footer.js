import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Footer = styled.footer``;

export default withRouter(({ location: { pathname } }) => (
  <Footer>
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-center"
    >
      <Navbar.Brand>© 2019 coolitea</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/terms">Terms</Link>
          </Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown
            title="Family Site"
            id="collasible-nav-dropdown"
            drop="up"
          >
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
            title="관련 사이트"
            id="collasible-nav-dropdown"
            drop="up"
          >
            <NavDropdown.Item href="http://www.fsc.go.kr/" target="_blank">
              금융위원회
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
