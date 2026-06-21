import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import CreateAcc from "./components/authentication/CreateAcc";
import Home from "./components/Homepage/Home";
import Cart from "./components/cart/cart";
import Profilepage from "./components/profile/Profilepage";
import Searchproducts from "./components/products/Searchproducts";
import { useState } from "react";

function App() {
  const [cartItem, setcartItem] = useState([]);
  const [searchproduct, setSearchproduct] = useState([]);
  function addtocart(product) {
    setcartItem((prev) => [...prev, product]);
  }
  function removecartItem(productId) {
    setcartItem((prev) => prev.filter((item) => item.id !== productId));
  }
  function resultProduct(){
    setSearchproduct
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createacc" element={<CreateAcc />} />
          <Route path="/search" element={<Searchproducts />}/>
          <Route
            path="/home"
            element={<Home addtocart={addtocart} cartItem={cartItem} />}
          />

          <Route
            path="/cart"
            element={
              <Cart cartItem={cartItem} removecartItem={removecartItem} />
            }
          />

          <Route path="/profilepage" element={<Profilepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
