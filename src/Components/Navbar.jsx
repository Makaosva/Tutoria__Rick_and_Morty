import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Rick and Morty App</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" exact activeClassName="active">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/characters" activeClassName="active">
          Characters
        </Nav.Link>
      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
}

export default NavBar;
