import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'


const NavBar = () => {

    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout();
        navigate('login', {
            replace: true
        })
    }





    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HeroesApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            to="marvel"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            to="dc"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Dc
                        </NavLink>

                        <NavLink
                            to="search"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Search
                        </NavLink>

                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        <NavLink
                            to="hero"
                            className = {({isActive}) => `nav-link ${isActive ? 'active' : ''}`}    
                        >
                            Hero
                        </NavLink> */}


                    </ul>
                </div>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-link text-primary'>{user?.name}</span>
                    <button
                        className='nav-link btn'
                        onClick={handleLogout}
                        
                    >
                        Log out
                    </button>

                </ul>

            </div>
        </nav>
    )
}

export default NavBar