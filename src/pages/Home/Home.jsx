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
          <h1 className='home__titulo'>Andres Perez</h1>
          <hr />
          <h3 className='home__subtitulo'>Desarrolador web, Front end</h3>
          <p className='home__info'><strong>Junior</strong> en entrenamiento continuo y siempre buscando la manera de expandir los conocimientos</p>
        </div>
      </div>
    </>
  )
}

export default Home