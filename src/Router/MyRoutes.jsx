import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Home } from "../components/Home"
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Cv } from '../components/Cv'
import { Contact } from '../components/Contact'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'
import { Project } from '../components/Project'

export const MyRoutes = () => {
    return (
        <BrowserRouter>

            <HeaderNav />

            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/cv' element={<Cv />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='project/:id' element={<Project />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>
                    } />

                </Routes>
            </section>

            <Footer />

        </BrowserRouter>

    )
}
