import React from 'react'
import Navbar from './navbar/Navbar'
import Login from './navbar/Login'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <BrowserRouter>
    <Link to="/"></Link>
    <Routes>
      <Route path="/" element={<Navbar />}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}
