import React from "react";


function Productcard({title, price, thumbnail, addtocart, product}) {
  console.log(addtocart);
  
  return (
    
      <div className=" rounded-xl p-2 flex flex-col bg-white">
        <img className="h-[60%]"
          src={thumbnail}
          alt=""
          />
        <div className="h-[20%]">
          <h3 className=" font-semibold mt-2 line-clamp-2">{title}</h3>

        </div>
        <div className="h-[15%]">
          <p className="font-bold">${price}</p>

        </div>
        <div className="h-[10%]">
          <button  onClick={()=>addtocart(product)} className="active:scale-90 bg-yellow-300 rounded-xl p-1 text-sm">Add to cart</button>
        </div>
      </div>
        
  );
}

export default Productcard;
