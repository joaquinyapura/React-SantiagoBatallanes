import React , {useState} from "react";
import { Card, Button, InputGroup,Alert,Spinner } from "react-bootstrap";

export default function ItemDetail({ producto }) {



    const [valor, setvalor] =useState(0);


    const sumar = () => {
      if(valor < producto.stock){
        setvalor(valor + 1)
    };
    };
    const restar = () => {
      if(valor !== 0) {
        setvalor(valor - 1)
    };
    };


  const alertar = () => {
    alert("Compra efectuada correctamente")
  };

  return (
    <>
      <div className="contenedorTarjetas">
        {producto.id ? (
          <>
            <Card className="card col-lg-2 col-sm-12">
              <Card.Img
                variant="top"
                src="https://dummyimage.com/250/ffffff/000000"
              />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{`${producto.categoria} ${producto.id}`}</Card.Text>
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
                <Button variant="primary" onClick={alertar}>
                  Añadir al carrito
                </Button>
              </Card.Body>
            </Card>
          </>
        ) : (
          <><Spinner animation="border" role="status">
        </Spinner></>
        )}
      </div>
    </>
  );
}
