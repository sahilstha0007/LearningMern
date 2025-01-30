import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row gap-4'>
            <NavLink
                to="/"
                className=' bg-emerald-700 hover:bg-emerald-600 border-2  border-black rounded text-white w-24 h-12 text-center py-2.5 '>Home</NavLink>
            <NavLink    
                className="bg-emerald-700 hover:bg-emerald-600 text-white w-24 h-12 text-center py-2.5 border-2 border-black rounded "
                to="/pastes"> Pastes</NavLink>
        </div>
    )
}

export default Navbar
