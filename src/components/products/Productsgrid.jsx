import React from 'react'
import Productcard from './Productcard'
import { useState } from 'react'
import { useEffect } from 'react';

function Productsgrid() {
    const [products, setProducts] = useState([]); 
    
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[])
    console.log(products)

  return (
    <>
    <div className='grid grid-cols-2 gap-4 m-2 md:grid-cols-5 sm:grid-cols-3'>
        {products.map(products => (
            <Productcard
                
                key={products.id}
                title = {products.title}
                price = {products.price}
                thumbnail = {products.thumbnail}
            />
        ))}
    </div>
    </>
  )
}

export default Productsgrid