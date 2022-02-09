import React, {useContext} from 'react'

import {BsCart} from 'react-icons/bs';
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

import { cartContext } from './context/CartProvider';


export default function Carro() {
    const {cartCount} = useContext(cartContext);
    
    return (
        <>
        <NavLink className="nav" to="/carro"><BsCart/><p>{cartCount}</p></NavLink>
        </>
    )
}

