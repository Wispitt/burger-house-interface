import { createHashRouter } from 'react-router-dom';

import { Login } from './pages/Login';
import { CadastroUser } from './pages/Cadastro';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { MenuBurger, MenuDesserts, MenuApps, MenuDrinks } from './pages/MenusProducts';

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
	{
		path: '/hamburguers',
		element: <MenuBurger />,
	},
	{
		path: '/entradas',
		element: <MenuApps />,
	},
	{
		path: '/bebidas',
		element: <MenuDrinks />,
	},
	{
		path: '/sobremesas',
		element: <MenuDesserts />,
	},
	{
		path: '/carrinho',
		element: <Cart />,
	},
]);
