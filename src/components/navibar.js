import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/* IMPORTACIONES REACT */
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import CARRO from "./CARRO";

export default function Navibar({ jsonLinks }) {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="me-auto my-2 my-lg-0"
      >
        <Container>
          <Navbar.Brand href="#home">Hospital Santa Maria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {jsonLinks.map((Link) => (
                <Nav.Link href={Link.url}>{Link.nombre}</Nav.Link>
              ))}
            </Nav>

            <Nav className="justify-content-end" activeKey="/home">
              <CARRO />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
