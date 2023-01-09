import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <h2>Pandora Movies</h2>
      <Outlet/>
    </div>
  )
}

export default App
