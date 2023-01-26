import React from 'react'
import { chat, ecomerce, firebase, github, todo } from './img'
import './Proyectos.scss'

const Proyectos = () => {
    return (
        <>
            <section className='proyectos'>
                <a target='_blank' className='proyectos__link' href='https://github.com/andres0818'>
                    <img className='proyectos__img' src={github} alt="" />
                </a>
                <a target='_blank' className='proyectos__link' href='https://github.com/andres0818/Chateando'>
                    <img className='proyectos__img' src={chat} alt="" />
                </a>
                <a target='_blank' className='proyectos__link' href='https://andres0818.github.io/ecomerce-zapatos/'>
                    <img className='proyectos__img' src={ecomerce} alt="" />
                </a>
                <a target='_blank' className='proyectos__link' href='https://andres0818.github.io/validacion-usuarios/'>
                    <img className='proyectos__img' src={firebase} alt="" />
                </a>
                <a target='_blank' className='proyectos__link' href='https://andres0818.github.io/todo-sprint-2/'>
                    <img className='proyectos__img' src={todo} alt="" />
                </a>

            </section>
        
        </>
    )
}

export default Proyectos



/* 
*/

/* 
 <img className='proyectos__img' src={github} alt="" />
                <img className='proyectos__img' src={chat} alt="" />
                <img className='proyectos__img' src={ecomerce} alt="" />
                <img className='proyectos__img' src={firebase} alt="" />
                <img className='proyectos__img' src={todo} alt="" />
*/