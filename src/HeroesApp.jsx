import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider'

// import {NavBar} from './ui'
import AppRouter from './router/AppRouter'

const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    )
}

export default HeroesApp