import { useNavigate } from 'react-router-dom';

import {
	AllContent,
	Container,
	Banner,
	CartInterfaceMain,
	UserItems,
	Main,
	ButtonReturn,
	ContainerCart,
	Header,
} from './styles';

import bannerCart from '../../assets/img/banner-cart.png';
import { CartItems, CartResume } from '../../components';

export function Cart() {
	const navigate = useNavigate();

	return (
		<AllContent>
			<Container>
				<ContainerCart>
					<Header>
						
						<Banner src={bannerCart} alt="banner do carrinho" />
					</Header>
					<Main>
						<CartInterfaceMain>
							<h4>SEUS ITENS</h4>
							<UserItems>
								<CartItems />
							</UserItems>
							<ButtonReturn onClick={() => navigate('/hamburguers')}>
								<i className="ri-arrow-left-line"></i>
								Continuar comprando
							</ButtonReturn>
						</CartInterfaceMain>
						<CartResume />
					</Main>
				</ContainerCart>
			</Container>
		</AllContent>
	);
}
