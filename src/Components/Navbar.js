import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <header>
             <nav className="navbar">
            <Link to='/' className="logo">Logo</Link>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li className="nav-item">
                <Link to ="/"  className="nav-links" onClick={handleClick}>
                     Home
                </Link>
                </li>
                <li className="nav-item">
                <Link to ="/about"  className="nav-links" onClick={handleClick}>
                        About
                </Link>
                </li>
                    <li className="nav-item">
                <Link to ="/products"  className="nav-links" onClick={handleClick}>
                        Products
                </Link>
                </li>
                    <li className="nav-item">
                <Link to ="/contact"  className="nav-links" onClick={handleClick}>
                        Contact
                </Link>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
        </header>
       
    )
}

export default Navbar;