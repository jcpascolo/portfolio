import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <NavLink className="brand-logo">BOMBA</NavLink>
                    <ul className="right">
                        <li><NavLink to="/">Personal Information</NavLink></li>
                        <li><NavLink to="/experience">Experience</NavLink></li>
                        {/* <li><a href="/">Personal Information</a></li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar