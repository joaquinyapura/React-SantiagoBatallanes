import React, { useState, useEffect } from "react";

import "../App.css";

import ItemList from "./ItemList";


export default function ItemListContainer() {

/* 
  const [promesaActiva, setPromesaActiva] = useState(false); */

  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  
  useEffect(()=>{

    const productsPromisse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id:'0', nombre: "Remera oversize", categoria:"remera", marca:"Nike", stock: 3 },
          { id:'1',nombre: "Adidas remera",categoria:"remera",marca:"Adidas", stock: 5 },
          { id:'2',nombre: "Puma pantalon",categoria:"pantalon",marca:"Puma", stock: 1 },
          { id:'3',nombre: "DC pantalon",categoria:"pantalon",marca:"Dc", stock: 1 },
        ]);
      }, 2000);
    });
  
    productsPromisse
      .then((res) => {
        /* setPromesaActiva(true); */
        setArrayDeProductos(res);
      })
  
      .catch((err) => {
        console.log(err);
      });

  },[])



  return (
    <>
    <ItemList arrayDeProductos={arrayDeProductos} />

    </>
      
  );
}


/* {promesaActiva ? (
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
</> */