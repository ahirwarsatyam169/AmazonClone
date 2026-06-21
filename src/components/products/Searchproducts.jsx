import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Homepage/navbar';
import Productsgrid from './Productsgrid';
import Productcard from './Productcard';

function Searchproducts(products, product, Productcard) {
  const getproduct = useLocation();
  const getproductname = getproduct.state?.searchproduct || "";

  return (
    <>
    <Navbar/>
    
    <div className='font-bold text-xl m-3'>
      <h1>Search results for <span>{getproductname}</span></h1>
    </div>
    
    <Productsgrid>
      
    </Productsgrid>
    </>
  )
}

export default Searchproducts