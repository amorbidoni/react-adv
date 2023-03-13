import { BrowserRouter, Routes, Route, NavLink, Navigate  } from "react-router-dom";

import logo from '../logo.svg'

function Navigation() {


    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react logo" />
                    <ul>
                        <li>
                            <NavLink to={'/'} className={({isActive})=> isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/About'} className={({isActive})=> isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Users'} className={({isActive})=> isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About page</h1>}/>
                    <Route path="users" element={ <h1>Users page</h1> }/>
                    <Route path="/" element={ <h1>Home page</h1> }/>
                    <Route path="/*" element={ <Navigate to={'/'} replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>        
    )
}

export default Navigation
