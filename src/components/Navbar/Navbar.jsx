import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav__container'>
                <li className='nav__lista'>
                    <Link to='/' className='nav__link'>Inicio</Link>
                </li>
                <li className='nav__lista'>
                    <Link to='/conocimientos' className='nav__link'>Conocimientos</Link>
                </li>
                <li className='nav__lista'>
                    <Link to='/proyectos' className='nav__link'>Proyectos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar