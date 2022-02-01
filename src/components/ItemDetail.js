import React , {useState} from "react";
import { Card, Button, InputGroup,Alert,Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import Carro from "./Carro";

export default function ItemDetail({ producto }) {

  const [mostrarItemCount,setMostrarItemCount]=useState(true);
  
    function onAdd (valor){

    alert(`quiere agregar ${valor}`);
    setMostrarItemCount(false);
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
                {
                  (mostrarItemCount)?<ItemCounter producto={producto} onAdd={onAdd} />
                  :
                  <Link to={`/carro`}>Ir al carrito</Link>
                }
                
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
