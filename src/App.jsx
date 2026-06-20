import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import CreateAcc from './components/authentication/CreateAcc'
import Home from './components/Homepage/Home'
import Cart from './components/cart/cart'
import Profilepage from './components/profile/Profilepage'
import { useState} from 'react'

function App() {
  const [cartItem, setcartItem] = useState([]);

  function addtocart(product) {
    setcartItem(prev => [...prev, product]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              addtocart={addtocart}
              cartItem={cartItem}
            />
          }
        />

        <Route
          path="/cart"
          element={<Cart cartItem={cartItem} />}
        />

        <Route
          path = "/profilepage"
          element ={<Profilepage/>}        
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;