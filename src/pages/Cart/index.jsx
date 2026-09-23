import {
	Container,
	Banner,
	CartItens,
	UserItems,
	Main,
	ButtonReturn,
	Section,
	ButtonOrder,
	ButtonClearCart,
	Content,
	ValueOrder,
	ValueOrderAll,
	ContainerCart,
	Header,
	ValueDelivery,
} from './styles';

import bannerCart from '../../assets/img/banner-cart.png';
import { FooterAll, HeaderAll, CartItems } from '../../components';

export function Cart() {
	return (
		<Container>
			<ContainerCart>

				<Header>
					<HeaderAll />
					<Banner src={bannerCart} alt="banner do carrinho" />
				</Header>

				<Main>
					<CartItens>
						<h4>SEUS ITENS</h4>
						<UserItems>
							<CartItems />
						</UserItems>
						<ButtonReturn>Continuar comprando</ButtonReturn>
					</CartItens>
					<Section>
						<h4>RESUMO DO PEDIDO</h4>
						<Content>
							<ValueOrder>
								<p>Subtotal</p>
								<span>R$ 62,70</span>
							</ValueOrder>
							<ValueDelivery>
								<p>Taxa de entrega</p>
								<span>R$ 5,00</span>
							</ValueDelivery>
							<ValueOrderAll>
								<h2>Total</h2>
								<h3>R$ 67,70</h3>
							</ValueOrderAll>

							<ButtonOrder>Finalizar pedido</ButtonOrder>
							<ButtonClearCart>Limpar carrinho</ButtonClearCart>
						</Content>
					</Section>
				</Main>
			</ContainerCart>
			<FooterAll />
		</Container>
	);
}
