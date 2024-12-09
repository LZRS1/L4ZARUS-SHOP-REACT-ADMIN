import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
             
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-red-500 via-black to-black bg-cover animate-gradient">
        <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-md w-full">
            <h1 className="text-2xl font-bold text-center text-red-600 mb-6">PANEL DE ADMINISTRADOR</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">CORREO ELECTRONICO</p>
                    <input
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">CONTRASEÑA</p>
                    <input
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button className="mt-4 w-full py-2 px-4 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-300" type="submit">
                    INICIAR SESION
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
