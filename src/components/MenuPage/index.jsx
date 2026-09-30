import { useNavigate } from 'react-router-dom';

import {
	AllContent,
	Container,
	Section,
	ContainerMenuAndButtons,
	ButtonsMenus,
	AllButtonsMenus,
	MenuProducts,
} from './styles';

const menuItems = [
	['Hambúrguers', '/hamburguers'],
	['Entradas', '/entradas'],
	['Bebidas', '/bebidas'],
	['Sobremesas', '/sobremesas'],
];

export function MenuPage({ activeCategory, Carousel }) {
	const navigate = useNavigate();

	return (
		<AllContent>
			<Container>
				<Section>
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

				
			</Container>
		</AllContent>
	);
}
