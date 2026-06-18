import React from 'react'
import Productcard from './Productcard'
import { useState, useEffect } from 'react'

function Productsgrid({ addtocart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return (
        <>
            <div className='grid grid-cols-2 gap-4 m-2 md:grid-cols-5 sm:grid-cols-3'>
                {products.slice(0, 30).map(product => (
                    <Productcard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        thumbnail={product.thumbnail}
                        product={product}
                        addtocart={addtocart}
                    />
                ))}
            </div>
        </>
    )
}

export default Productsgrid 