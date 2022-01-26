import React from "react";
import {Card,Button } from "react-bootstrap";


export default function ItemDetail({ producto }) {

    const alertar = () => {
        alert(`estas cargando  ${producto.nombre}`);
      };

    return (
        <>
            <div className="">
                {(producto.id) ?
                    <>
                    <Card className="card col-lg-2 col-sm-12">
        <Card.Img variant="top" src="https://dummyimage.com/250/ffffff/000000" />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
           { `${producto.categoria} ${producto.id}`}
          </Card.Text>
          <Button variant="primary" onClick={alertar} >Añadir al carrito</Button>
        </Card.Body>
      </Card>
                </>
                    :
                    <>cargando...</>
                }
                {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
            </div>
        </>
    );
}