import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

/* IMPORTACIONES REACT */
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Carro from "./asdasd";

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
          <Link className="nav" to={"/"}>HOME</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {arrayDeProductos.map((item) => (
                <Link className="nav" to={`/category/${item}`}>{item}</Link>
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
