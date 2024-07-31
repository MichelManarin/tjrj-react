import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Ínicio</Nav.Link>
          <Nav.Link href="/autores">Autores</Nav.Link>
          <Nav.Link href="/assuntos">Assuntos</Nav.Link>
          <Nav.Link href="/livros">Livros</Nav.Link>
          <Nav.Link href="/relatorio">Relatório</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
