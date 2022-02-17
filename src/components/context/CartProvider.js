import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const cartContext = createContext();





const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount,setCartCount]=useState(0)
  const [cartPrice,setCartPrice]=useState(0)


useEffect(()=>{
  const totalPriceCart = ()=> cart.reduce((acum, val) => acum + val.item.price, 0);
  const totalItemsCart = ()=>cart.reduce((acum, val) => acum + val.count, 0);
  setCartCount(totalItemsCart());
  setCartPrice(totalPriceCart());
},[cart])
  
  
  
  
  
  
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
    <cartContext.Provider value={{ cart, addToCart, removeItem,vaciarCarrito,cartCount,cartPrice}}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
