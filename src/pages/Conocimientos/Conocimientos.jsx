import React from 'react'
import { html, bootstrap, css, javascript, react, sass } from './img'
import './Conocimientos.scss'

const Conocimientos = () => {

  const conociminetos = [
    { name: html, lista: ['Partes de una pagina', 'Titulos', 'Listas', 'Tablas', 'Enlaces', 'Atributos y estilos'] },
    { name: javascript, lista: ['Operadores aritmeticos', 'Condicionales', 'Arrays', 'Manipulacion del DO'] },
    { name: css, lista: ['Diseños responsivos', 'Selectores', 'Estilos tipograficos', 'Pseudo-clases', 'Bacground', 'Degradados', 'Posicionamientos', 'animaciones basicas'] }
  ]

  return (
    <div className='conocimientos'>
      <h1 className='conocimientos__titulo'>Herramintas y lenguajes</h1>
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