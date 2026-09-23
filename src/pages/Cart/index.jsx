import {
	Container,
	Banner,
	CartItens,
	Main,
	ButtonReturn,
	Section,
	ButtonOrder,
	ButtonClearCart,
	Content,
	ValueOrder,
	ValueOrderAll,
    Header,
} from './styles';

import bannerCart from '../../assets/img/banner-cart.png';
import { FooterAll } from '../../components/Footer';
import { HeaderAll } from '../../components/Header';

export function Cart() {
	return (
		<Container>
			<Header>
				<HeaderAll />
			</Header>
			<Banner src={bannerCart} alt="banner do carrinho" />
			<Main>
				<CartItens>
					<h4>SEUS ITENS</h4>
					<ButtonReturn>Continuar comprando</ButtonReturn>
				</CartItens>
				<Section>
					<h4>RESUMO DO PEDIDO</h4>
					<Content>
						<ValueOrder>
							<p>Subtotal</p>
							<span style={{ marginLeft: '137px' }}>R$ 62,70</span>
						</ValueOrder>
						<ValueOrder>
							<p>Taxa de entrega</p>
							<span>R$ 5,00</span>
						</ValueOrder>
						<ValueOrderAll>
							<h2>Total</h2>
							<h3>R$ 67,70</h3>
						</ValueOrderAll>

						<ButtonOrder>Finalizar pedido</ButtonOrder>
						<ButtonClearCart>Limpar carrinho</ButtonClearCart>
					</Content>
				</Section>
			</Main>

			<FooterAll />
		</Container>
	);
}
