import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

/* COMPONENTES */
import Navibar from "./components/Navibar";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  const jsonLinks = [
    { nombre: "index", url: "https://www.instagram.com/" },
    { nombre: "index2", ulr: "https://www.instagram.com/" },
    { nombre: "index3", ulr: "https://www.instagram.com/" },
  ];
  return (
    <>
      <BrowserRouter>
        <Navibar jsonLinks={jsonLinks} />
        <Switch>
           
           <Route exact path="/">
            <ItemListContainer />
          </Route>


          <Route path="/item/:itemId">
            <ItemDetailContainer /> 
          </Route>

          <Route exact path="/recomendados">
          
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
