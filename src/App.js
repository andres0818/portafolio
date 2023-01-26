import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cabecera from './components/Cabecera/Cabecera'
import Home from './pages/Home/Home'

import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Cabecera />} >
       <Route path="/" element={<Home />} />
       <Route path='*' element={<h1>Ruta no encontrada</h1>}/>
      </Route>
    </Routes>
  )
}

export default App