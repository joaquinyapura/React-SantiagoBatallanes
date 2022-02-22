import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button,Card, } from 'react-bootstrap';
import { getFirestore } from '../firebase/firebase'




export default function Category() {

    const [arrayDeProductos, setArrayDeProductos] = useState([]);
    const {categoryId}=useParams();
    



  const alertar = () => {
    alert ("añadido al carrito")
  };

    
    
    useEffect(()=>{
      const db = getFirestore();

      const itemCollection = db.collection("Items").where('category', '==', categoryId);
  
      itemCollection.get()
        .then((querySnapShot) => {
  
          if (querySnapShot.size === 0) {
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

    },[categoryId])
    



  return(
      <>
      <div className="contenedorTarjetas">
      {arrayDeProductos.map(item=><Card className="card col-lg-2 col-sm-12">
              <Card.Img
                variant="top"
                src={item.img}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>$ {item.price}</Card.Text>
                <Button variant="primary" onClick={alertar}>
                  Añadir al carrito
                </Button>
              </Card.Body>
            </Card>)}
      </div>
      </>
  );
}

