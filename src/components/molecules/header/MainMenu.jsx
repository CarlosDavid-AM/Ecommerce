import { Link, useNavigate } from "react-router-dom"
import { deleteToken, token } from "../../../helpers/auth"

const MainMenu = () => {


    const nav = useNavigate()
    const handleSesion = () => {
        deleteToken()
        nav("/")
    }

    return(
        <nav className="w-full">
            <ul className="flex justify-end text-white">
                <li className="flex items-center">
                    <Link className="menu-item" to="/">
                        Inicio
                    </Link>
                </li>

                <li className="flex items-center">
                    <Link className="menu-item" to="/productos">
                        Productos
                    </Link>
                </li>
                {
                    !token() ? (
                        <li className="flex items-center">
                            <Link to="/login" className="menu-item">
                                Iniciar Sesion
                            </Link>
                        </li>
                    ) : (
                        <li className="flex items-center cursor-pointer">
                            <a onClick={handleSesion} className="menu-item">Cerrar Sesion</a>
                        </li>
                    )
                }

            </ul>
        </nav>
    )
}

export default MainMenu