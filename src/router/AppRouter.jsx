import {Routes, Route, Navigate} from 'react-router-dom'

import LoginPage from '../login/pages/LoginPage'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'

const AppRouter = () => {
    return (

        <>
            <Routes>
                <Route path="/*" element={<HeroesRoutes />} />
                <Route path="login" element={<LoginPage />}/>

            </Routes>
        </>
    )
}

export default AppRouter