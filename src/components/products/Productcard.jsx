import React from "react";


function Productcard({title, price, thumbnail}) {
  return (
    
      <div className="border rounded-xl p-2">
        <img
          src={thumbnail}
          alt=""
        />

        <h3 className="font-semibold mt-2 line-clamp-2">{title}</h3>

        <p className="font-bold">${price}</p>
      </div>
        
  );
}

export default Productcard;
