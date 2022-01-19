import React, { useState } from "react";
import { Card, Button, InputGroup,  } from "react-bootstrap";

export default function Tarjeta({item}) {


  

  /* stados del contador */
const [valor, setvalor] =useState(0);
  const sumar = () => {
    if(valor < item.stock){
      setvalor(valor + 1)
  };
  };
  const restar = () => {
    if(valor !== 0) {
      setvalor(valor - 1)
  };
  };

  /* alerta de agregar al carrito */
  const alertar = () => {
    alert(`estas cargando ${valor} ${item.nombre}`);
  };

  return (
    <>
      <Card className="card col-lg-2 col-sm-12">
        <Card.Img variant="top" src="https://dummyimage.com/250/ffffff/000000" />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            breve descripcion del producto lorem ipsum dolor 
          </Card.Text>
          <InputGroup className="counterContainer">
            <div>
            <button variant="primary" onClick={restar}>-1</button>
            </div>
            <input type="number" name="" id="" value={valor} className="counter__input" />
            <div><button onClick={sumar}>+1</button></div>
          </InputGroup>
          <Button variant="primary" onClick={alertar} >Añadir al carrito</Button>
        </Card.Body>
      </Card>

    </>
  );
}
