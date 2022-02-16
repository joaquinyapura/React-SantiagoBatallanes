import React, { useState } from "react";
import { InputGroup, Button } from "react-bootstrap";

export default function ItemCounter({ producto,onAdd }) {

    
  const [valor, setvalor] = useState(1);

  const sumar = () => {
    if (valor < producto.stock) {
      setvalor(valor + 1);
    }
  };
  const restar = () => {
    if (valor !== 0) {
      setvalor(valor - 1);
    }
  };

  

  return (
    <>
      <InputGroup className="counterContainer">
        <div>
          <button className="bottone5 " variant="primary" onClick={restar}>
            -1
          </button>
        </div>
        <input
          type="number"
          name=""
          id=""
          value={valor}
          className="counter__input"
        />
        <div>
          <button className="bottone5" onClick={sumar}>+1</button>
        </div>
      </InputGroup>
      <Button variant="primary" onClick={()=>onAdd(valor)}>
        Añadir al carrito
      </Button>
    </>
  );
}
