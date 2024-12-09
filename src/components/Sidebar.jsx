import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
                <img className='w-5 h-5' src={assets.subir} alt="" />
                <p className='hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>AGREGAR PRODUCTOS</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
                <img className='w-5 h-5' src={assets.lista} alt="" />
                <p className='hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>LISTA DE PRODUCTOS</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
                <img className='w-5 h-5' src={assets.ordenes} alt="" />
                <p className='hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>ORDENES</p>
            </NavLink>

        </div>

    </div>
  )
}

export default Sidebar
