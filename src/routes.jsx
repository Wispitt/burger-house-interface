import { createHashRouter } from 'react-router-dom';

import { Login } from './pages/Login';
import { CadastroUser } from './pages/Cadastro';
import { Home } from './pages/Home';

export const router = createHashRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/cadastro-de-usuario',
		element: <CadastroUser />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);
