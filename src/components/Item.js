import React, { useState} from "react";
import { Card, Button,InputGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tarjeta({item}) {


  return (
    <>
      <Card className="card col-lg-2 col-sm-12">
        <Card.Body className="card__content">
        <Card.Img className="card__img" src={item.img}  />
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
           $ {item.price}
          </Card.Text>
          
                <Link className="button__item"  to={`/item/${item.id}`}>ver detalles</Link>
    
        </Card.Body>
      </Card>

    </>
  );
}
