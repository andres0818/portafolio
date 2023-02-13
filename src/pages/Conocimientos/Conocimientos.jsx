import React from 'react'
import { html, bootstrap, css, javascript, react, sass } from './img'
import './Conocimientos.scss'

const Conocimientos = () => {

  const conociminetos = [
    { name: html, lista: ['Partes de una página', 'Titulos', 'Listas', 'Tablas', 'Enlaces', 'Atributos y estilos'] },
    { name: javascript, lista: ['Operadores aritméticos', 'Condicionales', 'Arrays', 'Manipulacion del DOM'] },
    { name: css, lista: ['Diseños responsivos', 'Selectores', 'Estilos tipográficos', 'Pseudo-clases', 'Background', 'Degradados', 'Posicionamientos', 'Animaciones basicas'] }
  ]

  return (
    <div className='conocimientos'>
      <div className='conocimientos__contenedor'>
        {conociminetos.map((e) => {
          return (
            <ul className='conocimientos__carta'>
              <img className='conocimientos__logo' src={e.name} alt="" />
              {e.lista.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
            </ul>
          )
        })}

      </div>
      <ul className='conocimientos__carta conocimientos__framework'>
        <li><img src={react} alt="" /></li>
        <li><img src={sass} alt="" /></li>
        <li><img src={bootstrap} alt="" /></li>
      </ul>
    </div>
  )
}

export default Conocimientos