import React, { useState} from "react";
import { Card, Button,InputGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tarjeta({item}) {


  const [valor, setvalor] =useState(0);
  


    const sumar = () => {
      if(valor < item.stock){
        setvalor(valor + 1)
    };
    };
    const restar = () => {
      if(valor !== 0) {
        setvalor(valor - 1)
    };
    };


  const alertar = () => {
    alert ("añadido al carrito")
  };

/*   src="https://ferreira.vteximg.com.br/arquivos/ids/370716-540-540/ad_gd5785.jpg?v=637465352727530000"
 */
  return (
    <>
      <Card className="card col-lg-2 col-sm-12">
        <Card.Body className="card__content">
        <Card.Img className="card__img" src="https://ferreira.vteximg.com.br/arquivos/ids/370716-540-540/ad_gd5785.jpg?v=637465352727530000"  />
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            breve descripcion del producto lorem ipsum dolor 
          </Card.Text>
          
                <Link className="button__item"  to={`/item/${item.id}`}>ver detalles</Link>
                <Link className="button__item"  to={`/update/${item.id}`}>modificar</Link>
        </Card.Body>
      </Card>

    </>
  );
}
