import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaWolfPackBattalion } from "react-icons/fa";

// import './Navbar.css'
const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const logOutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);
    }
    useEffect(() => {

    }, [token]);
    return (
        <header className="header bg-gray-200 shadow-md px-4 py-6 flex justify-between items-center"> {/* Tailwind CSS classes */}
        <div className="logo-brand">
          <NavLink className="navLink flex items-center gap-2" to="/">
          <FaWolfPackBattalion className='text-2xl text-violet-500'/> <p>Wolf{"</>"}Dev</p>
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-4 text-purple-500"> {/* Tailwind CSS classes */}
            <li><NavLink className="navLink hover:text-gray-700" to="/about">About</NavLink></li>
            {token && <li><NavLink className="navLink hover:text-gray-700" to="/services">Services</NavLink></li>}
            <li><NavLink className="navLink hover:text-gray-700" to="/contact">Contact</NavLink></li>
            {!token && <li><NavLink className="navLink hover:text-gray-700" to="/sign-up">Sign Up</NavLink></li>}
            {!token && <li><NavLink className="navLink hover:text-gray-700" to="/sign-in">Sign In</NavLink></li>}
            <li>
              <button onClick={logOutHandler} type="submit" className="logout-button">
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar
