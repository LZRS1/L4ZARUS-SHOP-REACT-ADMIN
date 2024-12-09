import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-black'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="Logo" />
        
        <button 
          onClick={() => setToken('')} 
          className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-black px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 transform hover:scale-105'>
          CERRAR SESION
        </button>
    </div>
  )
}

export default Navbar;
