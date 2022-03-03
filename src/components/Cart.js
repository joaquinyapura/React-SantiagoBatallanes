import React, { useContext } from "react";
import { cartContext } from "./context/CartProvider";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Cart = () => {
  const { cart,cartCount,cartPrice,removeItem,vaciarCarrito } = useContext(cartContext);

  return (
    <>
    {cart.length>0?
    <div>
      <Table striped bordered hover variant="primary">
        <tbody>
          {cart.map((element) => {
            return (
              
              <tr>
                <td>{element.item.title}</td>
                <td>{element.count}</td>
                <td>$ {element.item.price * element.count}</td>
                <td>
                  <button
                    onClick={() => removeItem(element.item.id)}
                    type="button"
                    className="btn btn-primary"
                  >
                    eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div> cantidad de productos {cartCount} </div>
      <div> precio total {cartPrice} </div>
      <Button variant="danger" onClick={() => vaciarCarrito()}>Vaciar Carrito de compras</Button>
      <Link className="button__item" to={"/formulario"}> Finalizar Compra </Link>

      </div>
    :
    <Link className="button__item" to={"/"}>Back to shop</Link>
    }
    </>
  );
};

export default Cart;
