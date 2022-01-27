import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button,Card, } from 'react-bootstrap';




export default function Category() {

    const [arrayDeProductos, setArrayDeProductos] = useState([]);
    const {categoryId}=useParams();




  const alertar = () => {
    alert ("añadido al carrito")
  };

    
    
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
            setArrayDeProductos(res.filter(item=>item.categoria===categoryId));
        })
        
        .catch((err) => {
            console.log(err);
        });

    },[categoryId])
    



  return(
      <>
      <div className="contenedorTarjetas">
      {arrayDeProductos.map(item=><Card className="card col-lg-2 col-sm-12">
              <Card.Img
                variant="top"
                src="https://dummyimage.com/250/ffffff/000000"
              />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{`${item.categoria} ${item.id}`}</Card.Text>
                <Button variant="primary" onClick={alertar}>
                  Añadir al carrito
                </Button>
              </Card.Body>
            </Card>)}
      </div>
      </>
  );
}

