import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Cabecera.scss'
import Footer from '../Footer/Footer'
import NavRedes from '../NavRedes/NavRedes'

const Cabecera = () => {
    return (
        <>
            <div className='cabecera'>
                <h1 className='cabecera__titulo'>Portafio</h1>
                <Navbar />
                <div className='cabecera__redes'>
                    <NavRedes />
                </div>
            </div>
            <Outlet />
            <Footer />

        </>
    )
}

export default Cabecera