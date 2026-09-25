import {
	Container,
	Banner,
	CartInterfaceMain,
	UserItems,
	Main,
	ButtonReturn,
	ContainerCart,
	Header,
	Content,
} from './styles';

import bannerCart from '../../assets/img/banner-cart.png';
import { FooterAll, HeaderAll, CartItems, CartResume } from '../../components';

export function Cart() {
	return (
		<Container>
			<ContainerCart>
				<Header>
					<HeaderAll />
					<Banner src={bannerCart} alt="banner do carrinho" />
				</Header>

				<Main>
					<CartInterfaceMain>
						<h4>SEUS ITENS</h4>
						<UserItems>
							<CartItems />
						</UserItems>
					</CartInterfaceMain>
					<Content>
							<ButtonReturn>Continuar comprando</ButtonReturn>
						</Content>

					<CartResume />
				</Main>
			</ContainerCart>
			<FooterAll />
		</Container>
	);
}
