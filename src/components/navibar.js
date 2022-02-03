import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

/* IMPORTACIONES REACT */
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Carro from "./Carro";
import Cart from "./Cart";

export default function Navibar({ arrayDeProductos }) {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="me-auto my-2 my-lg-0"
      >
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {arrayDeProductos.map((item) => (
                <Link className="nav" to={`/category/${item.categoria}`}>{item.categoria}</Link>
              ))}
            </Nav>

            <Nav className="justify-content-end" activeKey="/home">
              <Carro />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
