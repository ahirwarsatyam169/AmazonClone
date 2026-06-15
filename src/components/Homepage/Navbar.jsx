import React from "react";
import logo from "../../assets/amazonlogo.png";
import ham from "../../assets/hamburgermenu.png";
import search from "../../assets/search.png"

function Navbar() {
  return (
    <>
      <nav className="h-14 bg-[#131921]">
        <div className="flex h-full justify-between ">
          <div className="flex h-full">
            <img className="scale-60" src={ham} alt="Menu" />
            <img className="scale-40 -translate-x-14" src={logo} alt="amazon" />
          </div>
          <div className="flex items-center">
            <button className="text-white m-4 ">cart</button>
            <button className="text-white m-4 ">profile</button>
          </div>
        </div>
        
      </nav>
      {/*Search bar */}
      <div className="flex justify-center mt-1 w-full">
          <div className="flex w-[90%] relative">
            <input className="p-2 font-bold w-[90%] border rounded-sm h-[45px]" type="text" placeholder="Search"/>
            <img className="absolute right-2 top-1/2 -translate-y-1/2 h-6" src={search} alt="" />  
            
          </div>
          
      </div>
    </>
  );
}

export default Navbar;
