import React from "react";
import logo from "../../assets/amazonlogo.png";
import ham from "../../assets/hamburgermenu.png";
import search from "../../assets/search.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const gotocart = useNavigate();
  function navigatecart() {
    gotocart("/cart");
  }
  const gohome = useNavigate();

  function redirecthome() {
    gohome("/home");
  }

  const gotoprofile = useNavigate();
  function redirectprofile(){
    gotoprofile("/profilepage")
  }

  const [searchproduct, setSearchproduct] = useState([]);
  function resultProduct(){
    setSearchproduct()
  }

  const searchbtn = useNavigate();
  const searchdata = useLocation();

  function gotosearch(){
    searchbtn("/search",{
      state:{
        searchproduct :  searchproduct
      }
    })
  }

  return (
    <>
      <nav className="h-14 bg-[#131921] sticky top-0 z-50">
        <div className="flex h-full justify-between ">
          <div className="flex h-full">
            <img className="scale-60" src={ham} alt="Menu" />
            <img onClick={redirecthome} className="scale-40 -translate-x-14" src={logo} alt="amazon" />
          </div>
          <div className="flex items-center">
            <button onClick={navigatecart} className="text-white m-4 ">
              <img
                className="h-6"
                src="https://www.pngmart.com/files/23/Cart-Icon-PNG-Image.png"
                alt=""
              />
            </button>
            <button onClick={redirectprofile} className="text-white m-4 ">
              <img
                className="h-6"
                src="https://imgs.search.brave.com/yY40QR9fVJ3OhLc93nAQLsJONeP3QprJ222vR8ukEB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/NjAyLzM1Ny9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItaWNvbi1m/cmVlLXBuZy5wbmc"
                alt=""
              />
            </button>
          </div>
        </div>
      </nav>
      {/*Search bar */}
      <div className="flex justify-center mt-1 w-full">
        <div className="flex w-[90%] relative">
          <input
            className="p-2 font-bold w-[90%] border rounded-sm h-[45px]"
            type="text"
            placeholder="Search"
            value={searchproduct}
            onChange={(e)=>setSearchproduct( e.target.value)}
          />
          <img
            onClick={gotosearch}

            className="absolute right-2 top-1/2 -translate-y-1/2 h-6"
            src={search}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
