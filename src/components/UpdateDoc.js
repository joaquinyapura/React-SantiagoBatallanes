import React, { useState, useEffect, useContext, useRef } from "react";
import firebase from "firebase";
import {useParams} from 'react-router-dom'
import { getFirestore } from '../firebase/firebase'


export default function TestForm() {
    
    const {docId}= useParams();
    const priceRef = useRef();
    const stockRef = useRef();

    console.log(docId)
    
    function handleClick() {
        
        const db = getFirestore();
        const docRef = db.collection("Items").doc(docId);


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

            <div>
                <h3>Ingresa tus datos:</h3>

                <input type="number" name="price" ref={priceRef} placeholder="price" />
                <br />

                <input type="number" name="stock" ref={stockRef} placeholder="stock" />
                <br />

                

                <button onClick={() => handleClick()} >actualizar</button>
            </div>
        </>
    );
}