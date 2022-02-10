import React, { useState, useEffect } from "react";
import { getFirestore } from '../firebase/firebase'
import "../App.css";
import ItemList from "./ItemList";


export default function ItemListContainer() {

/* 
  const [promesaActiva, setPromesaActiva] = useState(false); */

  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  
  useEffect(()=>{
    const db = getFirestore();

    const itemCollection = db.collection("Items")
    //.where('category', '==', 'adidas');

    itemCollection.get()
      .then((querySnapShot) => {

        if (querySnapShot.size == 0) {
          console.log('no hay documentos con en ese query');
          return
        }

        console.log('hay documentos');

        //console.log(querySnapShot.docs);

        setArrayDeProductos(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }
        ));
        
      })
      .catch((err)=>{
        console.log(err);
      })

  },[])



  return (
    <>
    <ItemList arrayDeProductos={arrayDeProductos} />

    </>
      
  );
}


/* {promesaActiva ? (
  <>
    <Container fluid className="row contenedorTarjetas">
      {arrayDeProductos.map((item) => {
        return <Item item={item} />;
      })}
    </Container>
  </>
) : (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
)}
</> */