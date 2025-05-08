// Cria a lista de rotas com o Router Dom
import { createBrowserRouter } from "react-router-dom"

// Importação das páginas utilizadas
import App from "./App.jsx"

import Atendimento from "./pages/Atendimento.jsx"
import Sobre from "./pages/Sobre.jsx"
import Inicio from "./pages/Inicio.jsx"
import Login from "./pages/Login.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/inicio",
                element:<Inicio />
            },
            {
                path:"/atendimento",
                element:<Atendimento/>
            },
            {
                path:"/sobre/:id",
                element:<Sobre/>
            },
        ]
    }
])

export default router;