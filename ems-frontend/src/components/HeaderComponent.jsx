import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a className="navbar-brand" href="https://www.javaguides.net">Employee Management System</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/employees'>Employees</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/departments'>Departments</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent