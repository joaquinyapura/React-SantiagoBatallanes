import React, { useState } from "react";
import { InputGroup, Button } from "react-bootstrap";

export default function ItemCounter({ producto,onAdd }) {

    
  const [valor, setvalor] = useState(0);

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
          <button variant="primary" onClick={restar}>
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
          <button onClick={sumar}>+1</button>
        </div>
      </InputGroup>
      <Button variant="primary" onClick={()=>onAdd(valor)}>
        Añadir al carrito
      </Button>
    </>
  );
}
