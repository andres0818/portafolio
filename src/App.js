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
        <Route path="/conocimientos" element={<Conocimientos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path='*' element={<h1>Ruta no encontrada</h1>} />
      </Route>
    </Routes>
  )
}

export default App