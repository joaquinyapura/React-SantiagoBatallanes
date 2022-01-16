import React from "react";
import { Container } from "react-bootstrap";
import '../App.css';


import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import TARJETA from "./TARJETA";

function ItemsContainer() {
  return (
    <Container>
     <TARJETA></TARJETA>
    </Container>
  );
}

export default ItemsContainer;
