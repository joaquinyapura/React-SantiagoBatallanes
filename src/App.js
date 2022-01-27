import React, {useState,useEffect} from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

/* COMPONENTES */
import Navibar from "./components/Navibar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Category from "./components/Category";


function App() {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  
  useEffect(()=>{

    const productsPromisse = new Promise((resolve, reject) => {
        resolve([
          { id:'0', nombre: "Remera oversize", categoria:"remera", marca:"Nike", stock: 3 },
          { id:'1',nombre: "Adidas remera",categoria:"remera",marca:"Adidas", stock: 5 },
          { id:'2',nombre: "Puma pantalon",categoria:"pantalon",marca:"Puma", stock: 1 },
          { id:'3',nombre: "DC pantalon",categoria:"pantalon",marca:"Dc", stock: 1 },
        ]);
    });
  
    productsPromisse
      .then((res) => {
        /* setPromesaActiva(true); */
        setArrayDeProductos(res);
      })
  
      .catch((err) => {
        console.log(err);
      });

  },[])
  return (
    <>
      <BrowserRouter>
        <Navibar arrayDeProductos={arrayDeProductos} />
        <Switch>
           
           <Route exact path="/">
            <ItemListContainer />
          </Route>


          <Route path="/item/:itemId">
            <ItemDetailContainer /> 
          </Route>

          <Route path="/category/:categoryId">
          <Category />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
