import axios from "axios"
import { API_URL } from "../../constants/env"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Registro  = () => {   

        const navigate = useNavigate()
        const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError()

        const dato = {
            email: e.target.email.value,
            password: e.target.password.value,
            details: {
                fullname: e.target.fullname.value,
            },
        }

        axios.post(`${API_URL}/public/users`, dato)
            .then(() => {
                    navigate("/login")}
                )
            .catch(error => 
                setError(error))
    }


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            name="fullname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nombre Completo"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Crear Cuenta
          </button>
        </div>
      </form>
      {error && (
        <p className="text-red-500 text-xs italic">{error?.response?.data.errors[0].message}</p>
      )}
      <div className="mt-4">
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-700 font-bold text-sm"
        >
          ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </div>
    </div>
  )
}

export default Registro