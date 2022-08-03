import { Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from '../auth/pages/LoginPage'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import PrivateRoute from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {
    return (

        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                       <LoginPage /> 
                    </PublicRoute>
                } />

                
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
                {/* <Route path="login" element={<LoginPage />} /> */}

            </Routes>
        </>
    )
}

export default AppRouter