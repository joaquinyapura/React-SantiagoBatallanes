import React , {useState, useContext} from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import { cartContext } from "./context/CartProvider";

export default function ItemDetail({ producto }) {

  const {addToCart}=useContext(cartContext);

  const [mostrarItemCount,setMostrarItemCount]=useState(true);
  
    function onAdd (valor){

      setMostrarItemCount(false);
      addToCart(producto,valor,)
  };


  return (
    <>
      <div className="contenedorTarjetas container">
        {producto.id ? (
          <>
            <div className="row">
            <Card className="card col-lg-5 col-sm-12">
              <Card.Body className="card__content">
              <Card.Img
                variant="top"
                src={producto.img}
              />
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{`${producto.category}`}</Card.Text>
                {
                  (mostrarItemCount)?<ItemCounter producto={producto} onAdd={onAdd} />
                  :
                  <Link className="button__item" to={"/carro"}>Ir al carrito</Link>
                }
                
              </Card.Body>
            </Card>
            </div>
          </>
        ) : (
          <><Spinner animation="border" role="status">
        </Spinner></>
        )}
      </div>
    </>
  );
}
