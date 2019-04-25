import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = styled.header``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand to="/">전자정부서비스</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Movie</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/tv">TV</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/search">Search</Link>
          </Nav.Link>
          <NavDropdown title="Sample" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/sample/1-1">Action</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/sample/1-2">Another action</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/sample/1-3">Something</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/sample/2">Separated link</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </Header>
));
