import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useSetLang, useT } from './context';

import * as Constants from 'Constants';

const Footer = styled.footer``;
let language = Constants.LANGUAGES.ENG;

export default withRouter(({ location: { pathname } }) => {
  const setLang = useSetLang();
  const t = useT();

  function handleLanguage(e) {
    if (Constants.LANGUAGES.ENG === language) {
      setLang(Constants.LANGUAGES.KOR);
      language = Constants.LANGUAGES.KOR;
    } else {
      setLang(Constants.LANGUAGES.ENG);
      language = Constants.LANGUAGES.ENG;
    }
  }

  return (
    <Footer>
      <Navbar
        className="bg-dark justify-content-center"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="bottom">
        <Navbar.Brand> {t(Constants.COPYRIGHT)} </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Text>
            <Link to="/terms">{t(Constants.TERMS)}</Link>
          </Navbar.Text>
          <Nav className="mr-auto">
            <NavDropdown
              title={t(Constants.FAMILY_SITE)}
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
              title={t(Constants.RELATED_SITE)}
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
        <Nav>
          <Button variant="secondary" onClick={handleLanguage}>
            {language === Constants.LANGUAGES.ENG ? '한글' : 'ENG'}
          </Button>
        </Nav>
      </Navbar>
    </Footer>
  );
});
