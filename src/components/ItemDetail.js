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
      <div className="contenedorTarjetas">
        {producto.id ? (
          <>
            <Card className="card col-lg-2 col-sm-12">
              <Card.Img
                variant="top"
                src="https://dummyimage.com/250/ffffff/000000"
              />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{`${producto.category} ${producto.id}`}</Card.Text>
                {
                  (mostrarItemCount)?<ItemCounter producto={producto} onAdd={onAdd} />
                  :
                  <Link to={"/carro"}>Ir al carrito</Link>
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
