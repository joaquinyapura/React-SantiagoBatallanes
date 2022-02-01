import React from 'react'

import {BsCart} from 'react-icons/bs';
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Carro() {
    return (
        <>
        <NavLink to="/carro"><BsCart/><p>1</p></NavLink>
        </>
    )
}

