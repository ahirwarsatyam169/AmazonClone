import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Productsgrid from '../products/Productsgrid'
import { useState } from 'react'
import Cart from '../cart/cart'


function Home({addtocart}) {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Productsgrid addtocart={addtocart}/>
    </>
  )
}

export default Home