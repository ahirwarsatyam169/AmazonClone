import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import CreateAcc from './components/authentication/CreateAcc'
import Home from './components/Homepage/Home'
import Cart from './components/cart/cart'
import Profilepage from './components/profile/Profilepage'

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/createacc' element={<CreateAcc />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element ={<Cart/>}/>
          <Route path='/profilepage' element={<Profilepage/>}/>
          


          
        </Routes>    
      </BrowserRouter>
  )
}

export default App