import React from 'react'
import Navbar from '../Homepage/Navbar';
import Cartproduct from './Cartproduct';

function Cart({cartItem}) {

  return (
    <>
    <Navbar/>
    <Cartproduct cartItem={cartItem}/>
    

    </>
  )
}

export default Cart