import React from 'react'
import { Link } from 'react-router-dom'
import { WorksList } from './WorksList'

export const Home = () => {
    return (
        <div className='home'>

            <h1>
                Hola, soy <strong>Daniel de Miguel</strong> y soy Desarrollador Web.
                Aquí mostraré todos los proyectos que he realizado tanto personales como profesionales.
            </h1>

            <h2 className='title'>
                Ofrezco mis servicios de <strong>programación y desarrollo</strong> para todo tipo de proyectos web. <Link to='/Contact'>Contacta conmingo</Link>
            </h2>

            <section className='lasts-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos como desarrollador web</p>

                <WorksList limite='2' />
            </section>

        </div>
    )
}
