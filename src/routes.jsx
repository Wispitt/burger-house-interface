import { createHashRouter } from 'react-router-dom';

import {
	Login,
	CadastroUser,
	Home,
	Cart,
	MenuBurger,
	MenuDesserts,
	MenuApps,
	MenuDrinks,
	Checkout,
	CompletePayment,
} from './pages';

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
	{
		path: '/checkout',
		element: <Checkout />,
	},
	{
		path: '/complete',
		element: <CompletePayment />,
	},
]);
