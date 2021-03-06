import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Constants from '../Constants';
import { useT } from './context';

const Header = styled.header``;

export default withRouter(({ location: { pathname } }) => {
  const t = useT();
  return (
    <Header>
      <Navbar
        bg="light"
        variant="light"
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="justivy-contents-between"
      >
        <Navbar.Brand to="/">
          <Link to="/">{t(Constants.SERVICE_NAME)}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Navbar.Text>
              <Link to="/about">{t(Constants.ABOUT)}</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/movie">{t(Constants.MOVIE)}</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/tv">{t(Constants.TV)}</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/search">{t(Constants.SEARCH)}</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/grid">{t(Constants.GRID)}</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/support">{t(Constants.SUPPORT)}</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/support">{t(Constants.SUPPORT)}</Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Header>
  );
});
