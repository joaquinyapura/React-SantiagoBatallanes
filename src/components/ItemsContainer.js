import React from "react";
import { Container } from "react-bootstrap";
import '../App.css';


import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ItemsContainer() {
  return (
    <Container>
      <Card className="tarjeta">
        <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/194-1948210_open-jpg-100x100-pixels-clipart.png" />
        <Card.Body>
          <Card.Title>Articulo</Card.Title>
          <Card.Text>
            descripción del articulo Lorem ipsum dolor sit amet, consectetur adipisicing eli caracteres
          </Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemsContainer;
