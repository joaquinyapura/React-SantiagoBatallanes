import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

/* IMPORTACIONES REACT */
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

export default function Navibar() {
    return (
        <>
        <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Hospital Santa Maria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Ho me</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <NavDropdown title="Turnos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pedir turno</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cancelar turno</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}

