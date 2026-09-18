import { useNavigate } from 'react-router-dom';

import {
	Container,
	Section,
	TitleWrapper,
	SnackBar,
	Header,
	ContainerMenuAndButtons,
	ButtonsMenus,
	AllButtonsMenus,
	MenuProducts,
	// Banner,
} from './styles';

import { FooterAll } from '../Footer';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { api } from '../../services/api';

const menuItems = [
	['Hambúrguers', '/hamburguers'],
	['Entradas', '/entradas'],
	['Bebidas', '/bebidas'],
	['Sobremesas', '/sobremesas'],
];

export function MenuPage({ activeCategory, Carousel }) {
	// const [categories, setCategories] = useState([]);

	// useEffect(() => {
	// 	async function fetchCategories() {
	// 		const { data } = await api.get('/categories');

	// 		setCategories(data);
	// 	}

	// 	fetchCategories();
	// }, []);

	// const category = categories.filter(
	// 	(item) => item.name === activeCategory
	// ).map((category) => category.url);

	// console.log(categories);
	const navigate = useNavigate();

	return (
		<Container>
			<Section>
				<div>
					<TitleWrapper>
						<h1>Burger House</h1>
					</TitleWrapper>
					<SnackBar>
						<span>SNACK BAR</span>
					</SnackBar>
				</div>
				<Header>
					<a onClick={() => navigate('/home')}>Início</a>
					<span>Cardápio</span>
					<a>Promoções</a>
					<a>Sobre nós</a>
					<a>Contato</a>
					<i className="ri-shopping-cart-line" />
					<i className="ri-user-3-line" />
				</Header>
				<ContainerMenuAndButtons>
					<h2>NOSSO CARDÁPIO</h2>
					<p>Escolha o que vai te deixar com água na boca</p>
					<AllButtonsMenus>
						{menuItems.map(([label, path]) => (
							<ButtonsMenus
								key={path}
								onClick={() => navigate(path)}
								style={
									label === activeCategory
										? { backgroundColor: '#f19710' }
										: undefined
								}
							>
								{label}
							</ButtonsMenus>
						))}
					</AllButtonsMenus>
				</ContainerMenuAndButtons>
			</Section>

			<MenuProducts>
				<Carousel />
			</MenuProducts>

			<FooterAll />
		</Container>
	);
}
