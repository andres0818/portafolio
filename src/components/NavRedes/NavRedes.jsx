import React from 'react'
import linkedin from './img/linkedin.png'
import github from './img/github.png'

import './NavRedes.scss'


const NavRedes = () => {
    return (
        <div className='navRedes'>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-p%C3%A9rez-17b568130/" target='_blank'><img src={linkedin} alt="" /></a>
            <a href="https://github.com/andres0818" target='_blank'><img src={github} alt="" /></a>
        </div>
    )
}

export default NavRedes