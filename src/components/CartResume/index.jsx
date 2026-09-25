import {
	Content,
	Section,
	ValueOrderAndDelivery,
	ValueOrderAll,
	ButtonClearCart,
	ButtonOrder,
} from './styles';

export function CartResume() {
	return (
		<Section>
			<h4>RESUMO DO PEDIDO</h4>
			<Content>
				<ValueOrderAndDelivery>
					<p className='subtotal'>Subtotal</p>
					<p className='value-subtotal'>R$ 62,70</p>
					<p className='delivery'>Taxa de entrega</p>
					<p className='value-delivery'>R$ 5,00</p>
				</ValueOrderAndDelivery>
				<ValueOrderAll>
					<h2 className='all-product'>Total</h2>
					<h3 className='value-all'>R$ 67,70</h3>
				</ValueOrderAll>

				<ButtonOrder>Finalizar pedido</ButtonOrder>
				<ButtonClearCart>Limpar carrinho</ButtonClearCart>
			</Content>
		</Section>
	);
}
