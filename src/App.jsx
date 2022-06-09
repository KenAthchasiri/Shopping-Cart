import { useState } from 'react'
import './App.css'
import CartComponent from './components/CartComponent'
import HeaderComponent from './components/HeaderComponent'

function App() {
  return (
    <div>
      <HeaderComponent/> 
      <CartComponent/>
    </div>
  )
}

export default App
