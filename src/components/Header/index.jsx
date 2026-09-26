
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Title, TitleWrapper, SnackBar, Content, Links, NavItem, CartIcon, UserIcon } from './styles';
import { SideBar } from '../SideBar';

export function HeaderAll() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const isCartActive = pathname === '/carrinho';

	const [sideBar, setSideBar] = useState(false);

	const activeSideBar = () => setSideBar(!sideBar);

	return (
		<Container>
			<Title>
				<TitleWrapper>
					<h1>Burger House</h1>
				</TitleWrapper>

				<SnackBar>
					<span>SNACK BAR</span>
				</SnackBar>
			</Title>
			<Content>
				<Links>
					<NavItem $isActive={pathname === '/home'} onClick={() => navigate('/home')}>
						Início
					</NavItem>
					<NavItem $isActive={pathname === '/hamburguers'}
							$isActiveApps={pathname === '/entradas'}
							$isActiveDrinks={pathname === '/bebidas'}
							$isActiveDesserts={pathname === '/sobremesas'}
					onClick={() => navigate('/hamburguers')}>
						Cardápio
					</NavItem>
					<a>Promoções</a>
					<a>Sobre nós</a>
					<a>Contato</a>
					<CartIcon onClick={() => navigate('/carrinho')} className="ri-shopping-cart-line" $isActiveCart={isCartActive} />
					<UserIcon onClick={activeSideBar} className="ri-user-3-line"></UserIcon>
					{sideBar && <SideBar active={setSideBar} />}
				</Links>
			</Content>
		</Container>
	);
}
