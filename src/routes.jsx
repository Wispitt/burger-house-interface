import { Route, Routes } from 'react-router-dom';

import {
	Login,
	CadastroUser,
	Home,
	Cart,
	MenuBurger,
	MenuDesserts,
	MenuApps,
	MenuDrinks,
	CompletePayment,
	Orders,
	NewProduct,
	EditProducts,
	Products,
} from './pages';

import { UserLayout } from './layouts/UserLayout';
import { AdminLayout } from './layouts/AdminLayout';

export function Router() {
	return (
		<Routes>
			<Route element={<UserLayout />}>
				<Route path="/home" element={<Home />} />
				<Route path="/hamburguers" element={<MenuBurger />} />
				<Route path="/entradas" element={<MenuApps />} />
				<Route path="/bebidas" element={<MenuDrinks />} />
				<Route path="/sobremesas" element={<MenuDesserts />} />
				<Route path="/carrinho" element={<Cart />} />
			</Route>

			<Route path='/admin' element={<AdminLayout />} >
				<Route path='/admin/pedidos' element={<Orders />} />
				<Route path='/admin/novo-produto' element={<NewProduct />} />
				<Route path='/admin/editar-produto' element={<EditProducts />} />
				<Route path='/admin/produtos' element={<Products />} />
			</Route>

			<Route path="/complete" element={<CompletePayment />} />
			<Route path="/" element={<Login />} />
			<Route path="/cadastro-de-usuario" element={<CadastroUser />} />
		</Routes>
	);
}