import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
    const navigate = useNavigate()

    const {login, authState} = useContext(AuthContext)

    
    const handleLogin = () => {
        login('vadick')
        navigate("/", {
            replace: true
        })
    }
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginPage