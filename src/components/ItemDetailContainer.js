import React, { useState, useEffect } from "react";
import {useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(()=>{
      setTimeout(()=>{

          let listadoDeProductos = [
            { id:'0', nombre: "Remera oversize", categoria:"remera", marca:"Nike", stock: 3,precio:221 },
            { id:'1',nombre: "Adidas remera",categoria:"remera",marca:"Adidas", stock: 5 ,precio:220 },
            { id:'2',nombre: "Puma pantalon",categoria:"pantalon",marca:"Puma", stock: 1,precio:100 },
            { id:'3',nombre: "DC pantalon",categoria:"pantalon",marca:"Dc", stock: 1,precio:202 },
          ];

          listadoDeProductos = listadoDeProductos.filter(item => item.id === itemId);

          let myProducto = listadoDeProductos[0];

          setProducto(myProducto);

      }, 2000)
  }, [itemId])

  return (
    <>
      <ItemDetail producto={producto}/>

    </>
  );
}