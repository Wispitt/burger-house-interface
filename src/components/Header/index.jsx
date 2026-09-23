
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Title, TitleWrapper, SnackBar, Content, Links, NavItem } from './styles';
import { SideBar } from '../SideBar';

export function HeaderAll() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

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
					<i onClick={() => navigate('/carrinho')} className="ri-shopping-cart-line"></i>
					<i onClick={activeSideBar} className="ri-user-3-line"></i>
					{sideBar && <SideBar active={setSideBar} />}
				</Links>
			</Content>
		</Container>
	);
}
