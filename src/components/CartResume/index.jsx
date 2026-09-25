import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
	Content,
	Section,
	ValueOrderAndDelivery,
	ValueOrderAll,
	ButtonClearCart,
	ButtonOrder,
} from './styles';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatePrice } from '../../utils/formatePrice';

export function CartResume() {

	const navigate = useNavigate();

	const { cartProducts, clearCart } = useCart();

	const [finalPrice, setFinalPrice] = useState(0);
	const [deliveryTax] = useState(500);

	useEffect(() => {
		const sumAllItems = cartProducts.reduce( (acc, current) => {
			return current.price * current.quantity + acc;
		}, 0);

		setFinalPrice(sumAllItems);
	}, [cartProducts]);

	const submitOrder = async () => {
		const products = cartProducts.map( (product) => {
			return {id: product.id, quantity: product.quantity};
		});

		try {
			const response = await api.post(
				'/orders', 
				{ products }, 
				{
					validateStatus: () => true,
				},
			);

			if (response.status === 200 || response.status === 201) {
				toast.success('Pedido realizado com sucesso!');
				setTimeout(() => {
					navigate('/home');
					clearCart;
				}, 1000);
			} else if (response.status === 400) {
				toast.error('Falha ao realizar seu pedido!');
			} else {
				throw new Error();
			}
		} catch {
			toast.error('Ocorreu um erro! Tente novamente.');
		}
	};

	return (
		<Section>
			<h4>RESUMO DO PEDIDO</h4>
			<Content>
				<ValueOrderAndDelivery>
					<p className='subtotal'>Subtotal</p>
					<p className='value-subtotal'>{formatePrice(finalPrice)}</p>
					<p className='delivery'>Taxa de entrega</p>
					<p className='value-delivery'>{formatePrice(deliveryTax)}</p>
				</ValueOrderAndDelivery>
				<ValueOrderAll>
					<h2 className='all-product'>Total</h2>
					<h3 className='value-all'> {formatePrice(finalPrice + deliveryTax)} </h3>
				</ValueOrderAll>

				<ButtonOrder onClick={submitOrder}>Finalizar pedido</ButtonOrder>
				<ButtonClearCart>Limpar carrinho</ButtonClearCart>
			</Content>
		</Section>
	);
}
