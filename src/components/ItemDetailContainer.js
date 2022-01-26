import React, { useState, useEffect } from "react";
import {useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(()=>{
      setTimeout(()=>{

          let listadoDeProductos = [
            { id:'0', nombre: "Nike", stock: 3 },
            { id:'1',nombre: "Adidas", stock: 5 },
            { id:'2',nombre: "Puma", stock: 1 },
            { id:'3',nombre: "DC", stock: 1 },
          ];

          listadoDeProductos = listadoDeProductos.filter(item => item.id === itemId);

          let myProducto = listadoDeProductos[0];

          setProducto(myProducto);

      }, 2000)
  }, [itemId])

  return (
    <>
    {itemId}
      <ItemDetail producto={producto}/>
      <Link to={"/item/3"}>ir al item 3</Link>

    </>
  );
}