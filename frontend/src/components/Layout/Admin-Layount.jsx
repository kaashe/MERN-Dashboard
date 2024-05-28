import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayount = () => {
    return (
     <div>
           <header>
            <div>
                <nav className='ml-2'>
                    <ul className='flex gap-3'>
                        <li className='text-blue-400'>
                            <NavLink to={'/admin/users'}>
                                Users
                            </NavLink>
                        </li>
                        <li className='text-blue-400'>
                            <NavLink to={'/admin/contacts'}>
                                contacts
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
     </div>
    )
}

export default AdminLayount
