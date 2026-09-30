import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
	Content,
	Section,
	ValueOrderAndDelivery,
	ValueOrderAll,
	ButtonClearCart,
	ButtonOrder,
} from './styles';

import TrashIcon from '../../assets/img/trash.svg';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatePrice } from '../../utils/formatePrice';
import { CheckoutForm } from '../Stripe/CheckoutForm';

export function CartResume() {
	const { cartProducts, clearCart } = useCart();

	const [finalPrice, setFinalPrice] = useState(0);
	const [deliveryTax] = useState(500);
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		const sumAllItems = cartProducts.reduce((acc, current) => {
			return current.price * current.quantity + acc;
		}, 0);

		setFinalPrice(sumAllItems);
	}, [cartProducts]);

	const click = () => {
		const submitOrder = async () => {
			const products = cartProducts.map((product) => {
				return {
					id: product.id,
					quantity: product.quantity,
					price: parseInt(product.price),
				};
			});

			try {
				const response = await api.post('/create-payment-intent', { products });

				if (response.status === 200) {
					setClientSecret(response.data.clientSecret);
					activeSideBar();
				}
			} catch {
				toast.error('Error! Tente novamente');
			}
		};

		const activeSideBar = () => setSideBar(!sideBar);

		submitOrder();
	};

	const [sideBar, setSideBar] = useState(false);

	return (
		<Section>
			<h4>RESUMO DO PEDIDO</h4>
			<Content>
				<ValueOrderAndDelivery>
					<p className="subtotal">Subtotal</p>
					<p className="value-subtotal">{formatePrice(finalPrice)}</p>
					<p className="delivery">Taxa de entrega</p>
					<p className="value-delivery">{formatePrice(deliveryTax)}</p>
				</ValueOrderAndDelivery>
				<ValueOrderAll>
					<h2 className="all-product">Total</h2>
					<h3 className="value-all">
						{' '}
						{formatePrice(finalPrice + deliveryTax)}{' '}
					</h3>
				</ValueOrderAll>

				<ButtonOrder onClick={click}>
					Finalizar pedido <i className="ri-arrow-right-line"></i>
				</ButtonOrder>
				{sideBar && (
					<CheckoutForm active={setSideBar} clientSecret={clientSecret} />
				)}
				<ButtonClearCart onClick={clearCart}>
					<img src={TrashIcon} alt="lixeira" />
					Limpar carrinho
				</ButtonClearCart>
			</Content>
		</Section>
	);
}
