import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { useCart } from '../../../hooks/CartContext';

import './styles.css';
import { api } from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function CheckoutForm({ active, clientSecret }) {
	const stripe = useStripe();
	const elements = useElements();

	const { cartProducts, clearCart } = useCart();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			console.error('Stripe ou Elements com falha, tente novamente!');
			return;
		}

		setLoading(true);
		setError('');
		setSuccess(false);

		try {
			if (!clientSecret) {
				throw new Error('Não foi possível iniciar o pagamento.');
			}

			const result = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			});

			if (result.error) {
				toast.error('Error! Tente novamente');
			}

			if (result.paymentIntent.status === 'succeeded') {
				try {
					const products = cartProducts.map((product) => {
						return {
							id: product.id,
							quantity: product.quantity,
							price: parseInt(product.price),
						};
					});

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
							navigate(`/complete?payment_intent_client_secret=${clientSecret}`);
							clearCart();
						}, 1000);
					} else if (response.status === 400) {
						toast.error('Falha ao realizar seu pedido!');
					} else {
						throw new Error();
					}
				} catch {
					toast.error('Ocorreu um erro! Tente novamente.');
				}
				setSuccess(true);
			} else {
				setError('O pagamento ainda não foi confirmado.');
			}
		} catch {
			setError('Erro ao processar pagamento.');
		}

		setLoading(false);
	};

	const closeSideBar = () => {
		active?.(false);
	};

	return (
		<div className="container-all">
			<form
				CheckoutForm={active}
				className="checkout-form"
				onSubmit={handleSubmit}
			>
				<h2 className="title">Finalizar pagamento</h2>
				<i className="ri-close-fill" onClick={closeSideBar}></i>

				<div>
					<label htmlFor="cardholder">Nome do titular</label>

					<input
						id="cardholder"
						type="text"
						placeholder="Nome completo"
						autoComplete="cc-name"
						required
					/>
				</div>

				<div>
					<span className="field-label">Dados do cartão</span>

					<CardElement
						options={{
							hidePostalCode: true,
							style: {
								base: {
									fontSize: '17px',
									color: '#f1f1f3',
									fontFamily: 'Arial, sans-serif',
									'::placeholder': {
										color: '#aab7c4',
									},
								},
								invalid: {
									color: '#df1b41',
								},
							},
						}}
					/>
				</div>

				<button type="submit" disabled={!stripe || !clientSecret || loading}>
					{loading ? 'Processando...' : 'Realizar compra!'}
				</button>
				{error && <p className="error">{error}</p>}
				{success && <p className="success">Pagamento realizado com sucesso!</p>}
			</form>

		</div>
	);
}
