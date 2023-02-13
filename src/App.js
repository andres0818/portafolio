import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cabecera from './components/Cabecera/Cabecera'
import Home from './pages/Home/Home'

import './App.scss'
import Conocimientos from './pages/Conocimientos/Conocimientos'
import Proyectos from './pages/Proyectos/Proyectos'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Cabecera />} >
        <Route path="/" element={<Home />} />
        <Route path="/portafolio/conocimientos" element={<Conocimientos />} />
        <Route path="/portafolio/proyectos" element={<Proyectos />} />
        <Route path='*' element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App