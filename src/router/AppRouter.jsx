import {Routes, Route, Navigate} from 'react-router-dom'

import DcPage from '../heroes/pages/DcPage'
import MarvelPage from '../heroes/pages/MarvelPage'
import LoginPage from '../login/pages/LoginPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="marvel" element={<MarvelPage />}/>
            <Route path="dc" element={<DcPage />}/>
            <Route path="login" element={<LoginPage />}/>

            <Route path="/" element={ <Navigate to="marvel" /> } />
        </Routes>
    )
}

export default AppRouter