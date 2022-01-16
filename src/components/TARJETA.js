import React, { useState } from "react";
import { Card, Button, InputGroup,  } from "react-bootstrap";

export default function TARJETA() {
  /* const min=1;
const max=10;

const [Sumar, setSumar] = useState(min);

function sumar() {
const newValue=add +1;
if (newValue<=max) { setSumar=newValue; } } */ 
const [valor, setvalor] =useState(0);
  const sumar = () => {
    setvalor(valor + 1);
  };
  const restar = () => {
    setvalor(valor - 1);
  };
  const alertar = () => {
    alert(`estas agregando ${valor} al carrito`)
  };

  return (
    <>
      <Card className="card">
        <Card.Img variant="top" src="https://dummyimage.com/250/ffffff/000000" />
        <Card.Body>
          <Card.Title>Nombre de producto</Card.Title>
          <Card.Text>
            breve descripcion del producto lorem ipsum dolor 
          </Card.Text>
          <InputGroup className="counterContainer">
            <div>
            <button onClick={restar}>-1</button>
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
