import { createHashRouter } from 'react-router-dom';

import { LoginUser } from './pages/Login';
import { CadastroUser } from './pages/Cadastro';
import { Home } from './pages/Home';

export const router = createHashRouter([
    {
        path: '/',
        element: <LoginUser />,
    },
    {
        path: '/cadastro-de-usuario',
        element: <CadastroUser />
    },
    {
        path: '/home',
        element: <Home />
    }
]);