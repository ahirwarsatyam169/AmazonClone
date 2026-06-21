import React from 'react'
import Navbar from '../Homepage/Navbar';
import Cartproduct from './Cartproduct';


function Cart({cartItem, removecartItem}) {
  
  return (
    <>
    <Navbar/>
    <Cartproduct cartItem={cartItem} removecartItem={removecartItem} />
    

    </>
  )
}

export default Cart