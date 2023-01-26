import React from 'react'
import perfil from './img/perfil.jpeg'
import './Home.scss'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div>
          <img className='home__foto' src={perfil} alt="" />
        </div>
        <div className='home__contenido'>
          <h1>Andres Perez</h1>
          <hr />
          <h3>Desarrolador web, Front end</h3>
          <p>Junior en entrenamiento continio y siempre buscando la manera de expandir los conocimientos</p>
        </div>
      </div>
    </>
  )
}

export default Home