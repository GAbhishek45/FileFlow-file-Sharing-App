import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import { Model } from './components/Model'
import Qr from './components/Qr'

const App = () => {
  return (
    <div className='dark'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/model' element={<Model/>} />
        <Route path='/qrCode' element={<Qr />} />
      </Routes>
    </div>
  )
}

export default App