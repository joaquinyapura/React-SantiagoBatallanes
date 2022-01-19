import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import "../App.css";

import Item from "./Item";

export default function ItemListContainer() {
  //const arrayDeProductos=[{nombre:'niki',stock:3},{nombre:'adidas',stock:5},{nombre:'puma',stock:1}];
  const [promesaActiva, setPromesaActiva] = useState(false);

  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  //{nombre:'nike',stock:3},{nombre:'adidas',stock:5},{nombre:'puma',stock:1},{nombre:'sa',stock:1}

  const productsPromisse = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { nombre: "nike", stock: 3 },
        { nombre: "adidas", stock: 5 },
        { nombre: "puma", stock: 1 },
        { nombre: "sa", stock: 1 },
      ]);
    }, 3000);
  });

  productsPromisse
    .then((res) => {
      setPromesaActiva(true);
      setArrayDeProductos(res);
    })

    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      {promesaActiva ? (
        <>
          <Container fluid className="row contenedorTarjetas">
            {arrayDeProductos.map((item) => {
              return <Item item={item} />;
            })}
          </Container>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
}
