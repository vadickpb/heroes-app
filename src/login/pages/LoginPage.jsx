import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
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