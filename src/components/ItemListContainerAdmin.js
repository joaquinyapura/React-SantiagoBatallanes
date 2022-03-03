import React, { useState, useEffect } from "react";
import { getFirestore } from '../firebase/firebase'
import "../App.css";
import ItemListAdmin from "./ItemListAdmin";


export default function ItemListContainerAdmin() {



  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  
  useEffect(()=>{
    const db = getFirestore();

    const itemCollection = db.collection("Items")

    itemCollection.get()
      .then((querySnapShot) => {

        if (querySnapShot.size == 0) {
          console.log('no hay documentos con en ese query');
          return
        }

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
    <ItemListAdmin arrayDeProductos={arrayDeProductos} />

    </>
      
  );
}