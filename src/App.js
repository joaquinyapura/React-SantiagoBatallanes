import React from 'react';
import './App.css';


/* COMPONENTES */
import Navibar from './components/Navibar';

import ItemListContainer from './components/ItemListContainer';



function App() {
  const jsonLinks=[{nombre:"index",url:"https://www.instagram.com/"},{nombre:"index2",ulr:"https://www.instagram.com/"},{nombre:"index3",ulr:"https://www.instagram.com/"}]
  return (
    <>
    <Navibar jsonLinks={jsonLinks}  />
    <ItemListContainer />
    </>
  );
}

export default App;
