import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import './Navbar.css'
const Navbar = () => {
    const [token, setToken] = useState(null);
    const logOutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);
    }
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [token]);
    return (
        <>
            <header>
                <div className="container flex flex-row justify-around my-6" style={{ backgroundColorL: 'red' }}>
                    <div className="logo-brand">
                        <NavLink className='navLink' to="/">WolfDev</NavLink>
                    </div>
                    <nav>
                        <ul className='flex flex-row gap-4'>
                            <li className='text-purple-500'><NavLink className='navLink' to="/about">About</NavLink></li>
                            {token && <li className='text-purple-500'><NavLink className='navLink' to="/services">Services</NavLink></li>}
                            <li className='text-purple-500'><NavLink className='navLink' to="/contact">Contact</NavLink></li>
                            <li className='text-purple-500'><NavLink className='navLink' to="sign-Up">Sign-Up</NavLink></li>
                            <li className='text-purple-500'><NavLink className='navLink' to="/sign-In">Sign-In</NavLink></li>
                            <li className='text-purple-500'> <button onClick={logOutHandler} type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Log out</button></li>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
