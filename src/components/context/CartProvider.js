import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, count) => {
    if (isInCart(producto.id)) {
      const indexItem = cart.findIndex(e => e.item.id === producto.id);
      cart[indexItem].count = cart[indexItem].count+count;
      setCart([...cart])
    } else {
      setCart([...cart, { item: producto, count }]);
    }
  };

  const isInCart = (id) => {
    return cart.some(element => element.item.id === id);
  };

  const removeItem =(id) => {
    const updatedCart=cart.filter(e=>e.item.id !== id)
    setCart(updatedCart);
  }
  const vaciarCarrito =() => {
    setCart([]);
  }



  return (
    <cartContext.Provider value={{ cart, addToCart, removeItem,vaciarCarrito }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
