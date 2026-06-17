import React from "react";


function Productcard({title, price, thumbnail, Productcard}) {
  return (
    
      <div className="border rounded-xl p-2 flex flex-col">
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
          <button className="bg-yellow-300 rounded-xl p-1 text-sm">Add to cart</button>
        </div>
      </div>
        
  );
}

export default Productcard;
