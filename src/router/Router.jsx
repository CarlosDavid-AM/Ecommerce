import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404" 
import Products from "../components/pages/Products"
import App from "../templates/App"
import Login from "../components/pages/Login"
import Registro from "../components/pages/Registro"

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <Error404 />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:"/productos",
                element: <Products />
            }
        ]
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/registro",
        element: <Registro />
    }
    
])

export default router