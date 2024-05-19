import React from 'react'
import Navbar from './Navbar'
import 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'
import UserDetails from './UserDetails'
export default function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<UserDetails/>}/>
        
      </Routes>
    </div>
  )
}
