import { createBrowserRouter } from "react-router-dom";

import { LoginUser } from './pages/Login'
import { CadastroUser } from './pages/Cadastro'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginUser />,
    },
    {
        path: '/cadastro-de-usuario',
        element: <CadastroUser />
    }
])