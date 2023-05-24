import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear()


    return (
        <footer className='footer'>

            Portfolio - Daniel de Miguel &copy; {currentYear}

        </footer>
    )
}
