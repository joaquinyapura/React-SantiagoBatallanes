import React from "react";
import { Container } from "react-bootstrap";

import "../App.css";

import ItemAdmin from "./ItemAdmin";

export default function ItemListAdmin({arrayDeProductos}) {


  return (
    <>
    <Container fluid className="row contenedorTarjetas">
      {arrayDeProductos.map((item) => {
        return <ItemAdmin item={item} />;
      })}
    </Container>

    </>
      
  );
}