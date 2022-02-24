import React, {useContext} from 'react'

import {BsCart} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import { cartContext } from './context/CartProvider';


export default function Carro() {
    const {cartCount} = useContext(cartContext);
    
    return (
        <>
        <NavLink className="nav" to="/carro"><BsCart/><p>{cartCount}</p></NavLink>
        </>
    )
}

