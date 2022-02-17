import React, { useContext } from "react";
import { cartContext } from "./context/CartProvider";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <td>#Id{element.item.id}</td>
                <td>{element.item.nombre}</td>
                <td>{element.count}</td>
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
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito de compras</button>
      <Link to={"/formulario"}> al formuuu </Link>

      </div>
    :
    <Link to={"/"}>Back to shop</Link>
    }
    </>
  );
};

export default Cart;
