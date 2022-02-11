import React, { useState, useEffect } from "react";
import {useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";


export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(()=>{
    const db = getFirestore();
    const itemCollection = db.collection("Items");

    const miItem = itemCollection.doc(itemId);
    
    miItem.get()    
    .then((doc) => {
      
      setProducto({id:doc.id, ...doc.data()});
      /* console.log(doc.data());
      console.log(doc.id);
      console.log({ id: doc.id, ...doc.data() }); */
      
      if (!doc.exists) {
        console.log('no existe ese documento');
        return
        }

      })
      .catch((err)=>{
        console.log(err);
      })
  }, [itemId])
  
  return (
    <>
      <ItemDetail producto={producto}/>
    </>
  );
}