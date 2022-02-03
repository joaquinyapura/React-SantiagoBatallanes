import React, { useContext } from 'react';
import { cartContext } from './context/CartProvider';
import { Table } from 'react-bootstrap';

export const Cart = () => {

    const {cart} = useContext(cartContext);
    const {removeItem}=useContext(cartContext);
    const {vaciarCarrito}=useContext(cartContext);
    
  return (
  <>
 <Table striped bordered hover variant="primary">
  <tbody>
    {cart.map(element=>{
        return(
    <tr>
      <td>#Id{element.item.id}</td>
      <td>{element.item.nombre}</td>
      <td>{element.count}</td>
      <td><button onClick={()=>removeItem(element.item.id)}  type="button" className="btn btn-primary">eliminar</button></td>
    </tr>
    
);
    })}

  </tbody>
</Table>
<button onClick={()=> vaciarCarrito()}>Vaciar Carrito de compras</button>
  </>

)
};

export default Cart