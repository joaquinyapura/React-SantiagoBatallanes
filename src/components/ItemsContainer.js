import React,{useState} from "react";
import { Container } from "react-bootstrap";
import '../App.css';


import Tarjeta from "./Tarjeta";

export default function ItemsContainer() {

  //const arrayDeProductos=[{nombre:'niki',stock:3},{nombre:'adidas',stock:5},{nombre:'puma',stock:1}];

  const [arrayDeProductos,setArrayDeProductos]=useState([{nombre:'nike',stock:3},{nombre:'adidas',stock:5},{nombre:'puma',stock:1},{nombre:'sa',stock:1}])

  return (
    <Container fluid className="row contenedorTarjetas">
     {
     arrayDeProductos.map(item=>{
      return <Tarjeta item={item} />
     })
     }
    </Container>
  );
}

