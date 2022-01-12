import React from 'react';
import './App.css';


/* COMPONENTES */
import Navibar from './components/navibar';

import ItemsContainer from './components/ItemsContainer';



function App() {
  const jsonLinks=[{nombre:"index",url:"https://www.instagram.com/"},{nombre:"index2",ulr:"https://www.instagram.com/"},{nombre:"index3",ulr:"https://www.instagram.com/"}]
  return (
    <>
    <Navibar jsonLinks={jsonLinks}  />
    <ItemsContainer />
    </>
  );
}

export default App;
