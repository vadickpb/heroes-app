import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext"

const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    return (logged)
        ? children
        : <Navigate to="/login" />
}

export default PrivateRoute