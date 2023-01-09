import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
    //Um <Outlet>deve ser usado em elementos de rota pai para renderizar seus elementos de rota filho
    
  )
}

export default App
