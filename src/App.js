import React, {useState,useEffect} from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

/* COMPONENTES */
import Navibar from "./components/Navibar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Category from "./components/Category";
import Cart from "./components/Cart";
import CartProvider from "./components/context/CartProvider.js";
import TestForm from "./components/TestForm";
import UpdateDoc from "./components/UpdateDoc"
import ItemListContainerAdmin from "./components/ItemListContainerAdmin";


function App() {
  const arrayDeProductos=["remeras","pantalones"]
          
  
   
  return (
    <>

    <CartProvider>
      <BrowserRouter>
        <Navibar arrayDeProductos={arrayDeProductos} />
        <Switch>
           
           <Route exact path="/">
            <ItemListContainer />
          </Route>
          
           <Route exact path="/carro">
            <Cart />
          </Route>

           <Route exact path="/formulario">
            <TestForm />
          </Route>

           <Route exact path="/ItemListContainerAdmin">
            <ItemListContainerAdmin />
          </Route>


          <Route path="/item/:itemId">
            <ItemDetailContainer /> 
          </Route>

          <Route path="/update/:docId">
            <UpdateDoc />
          </Route>

          <Route path="/category/:categoryId">
          <Category />
          </Route>
        </Switch>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
