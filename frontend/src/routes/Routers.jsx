import React from 'react'
import Login from '../pages/Login'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Tienda from '../pages/Tienda'
import Contact from '../pages/Contact'
import Error from '../pages/Error'

import {Routes, Route} from 'react-router-dom'
import Developers from '../pages/Developers'
import DevelopersDetails from '../pages/DevelopersDetails'


const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Tienda' element={<Tienda/>}/>
    <Route path='/registrar' element={<SignUp/>}/>
    <Route path='/*' element={<Error/>}/>
    <Route path='/developers' element={<Developers/>}/>
    <Route path='/developers/:id' element={<DevelopersDetails/>}/>


  </Routes>)
}

export default Routers
