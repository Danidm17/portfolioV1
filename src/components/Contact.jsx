import React from 'react'

export const Contact = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Contacto</h1>

            <form className='contact' action='mailto:danidm.dev@gmail.com'>
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellidos' />
                <input type="text" placeholder='Email' />
                <textarea placeholder='Motivo de contacto'></textarea>
                <input type="submit" value='Enviar' />
            </form>


        </div>
    )
}
