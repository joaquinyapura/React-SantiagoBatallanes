import React from "react";
import { Container } from "react-bootstrap";

import "../App.css";

import Item from "./Item";

export default function ItemList({arrayDeProductos}) {


  return (
    <>
    <Container fluid className="row contenedorTarjetas">
      {arrayDeProductos.map((item) => {
        return <Item item={item} />;
      })}
    </Container>

    </>
      
  );
}