import React, { useState, useEffect, useContext, useRef } from "react";
import firebase from "firebase";
import {useParams} from 'react-router-dom'
import { getFirestore } from '../firebase/firebase'


export default function TestForm() {
    
    const {docId}= useParams();
    const priceRef = useRef();
    const stockRef = useRef();

    
    const db = getFirestore();
    const docRef = db.collection("Items").doc(docId);

    
    function handleClick() {


        docRef.update({stock:stockRef.current.value,price:priceRef.current.value})
            .then(() => {
                console.log('cambio el stock!');
            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (

        <>

            <div className="form__container">
                <h3>Modifica el producto</h3>

                <input type="number" className="form__input" name="price" ref={priceRef} placeholder="price" />
                <br />

                <input type="number"  className="form__input" name="stock" ref={stockRef} placeholder="stock" />
                <br />

                

                <button onClick={() => handleClick()} >actualizar</button>
            </div>
        </>
    );
}