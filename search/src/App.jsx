import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Product from './Components/Product'
import Products from './Components/Products'
import Header from './Components/Header'

function App() {
  return (
    <div className=" mb-16 w-full h-fit bg-white">
      <Hero />
      <Products />
      <Header/>
    </div>
  )
}

export default App
