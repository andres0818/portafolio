import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Cabecera.scss'

const Cabecera = () => {
    return (
        <>
            <div className='cabecera'>
                <h1 className='cabecera__titulo'>Portafio</h1>
                <Navbar/>
            </div>
            <Outlet />

        </>
    )
}

export default Cabecera