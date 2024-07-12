import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary larger-navbar">
      <Container>
        <Navbar.Brand href="#home">THE CAMP STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/mycart">My Cart</Nav.Link>
            <NavDropdown title="Browse Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products">Tents</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products">
                Sleeping Bags
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products">Flashlights & Lanterns</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products">
                Camping Cookware
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
