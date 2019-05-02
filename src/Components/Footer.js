import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSetLang, useT } from "./context";
import * as Constants from "Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = styled.footer``;

let language = {
  code: Constants.LANGUAGES.EN.code,
  show: Constants.LANGUAGES.EN.show
};

export default withRouter(({ location: { pathname } }) => {
  const setLang = useSetLang();
  const t = useT();

  function handleLanguage(eventKey) {
    if (language.code === eventKey) {
    } else {
      if (eventKey === Constants.LANGUAGES.EN.code) {
        setLang(Constants.LANGUAGES.EN.code);
        language = Constants.LANGUAGES.EN;
      } else if (eventKey === Constants.LANGUAGES.KO.code) {
        setLang(Constants.LANGUAGES.KO.code);
        language = Constants.LANGUAGES.KO;
      } else if (eventKey === Constants.LANGUAGES.ID.code) {
        setLang(Constants.LANGUAGES.ID.code);
        language = Constants.LANGUAGES.ID;
      }
    }
  }

  return (
    <Footer>
      <Navbar
        className="bg-dark justify-content-center"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="bottom"
      >
        <Navbar.Brand>{t(Constants.COPYRIGHT)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Text>
            <Link to="/terms">{t(Constants.TERMS)}</Link>
          </Navbar.Text>
          <Nav className="mr-auto">
            <NavDropdown
              title={t(Constants.FAMILY_SITE)}
              id="collasible-nav-dropdown"
              drop="up"
            >
              <NavDropdown.Item
                href="http://www.ksd.or.kr"
                target="_blank"
                rel="noopener"
              >
                KSD
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://evote.ksd.or.kr"
                target="_blank"
                rel="noopener"
              >
                K-eVote
              </NavDropdown.Item>
              <NavDropdown.Item
                href="http://www.seibro.or.kr"
                target="_blank"
                rel="noopener"
              >
                Seibro
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <NavDropdown
              title={t(Constants.RELATED_SITE)}
              id="collasible-nav-dropdown"
              drop="up"
            >
              <NavDropdown.Item
                href="http://www.fsc.go.kr/"
                target="_blank"
                rel="noopener"
              >
                금융위원회(FSC)
              </NavDropdown.Item>
              <NavDropdown.Item
                href="http://dart.fss.or.kr/"
                target="_blank"
                rel="noopener"
              >
                전자공시시스템(Dart)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav activeKey={language.code} onSelect={k => handleLanguage(k)}>
            <NavDropdown
              title={language.show}
              id="collasible-nav-dropdown"
              drop="up"
            >
              <NavDropdown.Item eventKey={Constants.LANGUAGES.EN.code}>
                {Constants.LANGUAGES.EN.show}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={Constants.LANGUAGES.KO.code}>
                {Constants.LANGUAGES.KO.show}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={Constants.LANGUAGES.ID.code}>
                {Constants.LANGUAGES.ID.show}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Text>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/pages/한국예탁결제원/491409054328717"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCCkOHu8cifMUsfrlv2tBB_A"
              >
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/coolitea/egov-react"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Footer>
  );
});
