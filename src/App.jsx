import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import CreateAcc from './components/authentication/CreateAcc'
import Home from './components/Homepage/Home'


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/createacc' element={<CreateAcc />} />
          <Route path='/home' element={<Home />} />


          
        </Routes>    
      </BrowserRouter>
  )
}

export default App