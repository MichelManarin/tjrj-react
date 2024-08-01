import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Ínicio</Nav.Link>
          <Nav.Link as={Link} to="/autores">Autores</Nav.Link>
          <Nav.Link as={Link} to="/assuntos">Assuntos</Nav.Link>
          <Nav.Link as={Link} to="/livros">Livros</Nav.Link>
          <Nav.Link as={Link} to="/relatorio">Relatório</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
