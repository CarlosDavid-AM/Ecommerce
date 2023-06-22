import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <div className="flex">
            <Link to="/">
                <img src="https://app.ed.team/images/logo/logo-monocolor.svg" alt="Logo Ecommerce" />
            </Link>
        </div>
    )
}

export default Logo