import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './styles.css';

export function CheckoutForm({ active }) {
	const stripe = useStripe();
	const elements = useElements();

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

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});

		try {
			const response = await fetch('/create-payment-intent', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					amount: 5000,
					currency: 'brl',
				}),
			});

			const data = await response.json();

			if (!response.ok || !data.clientSecret) {
				throw new Error(data.error || 'Não foi possível iniciar o pagamento.');
			}

			// Confirma o pagamento com o cartão
			const result = await stripe.confirmCardPayment(data.clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			});

			if (result.error) {
				throw new Error(result.error.message);
			}

			if (result.paymentIntent.status === 'succeeded') {
				setSuccess(true);
			} else {
				setError('O pagamento ainda não foi confirmado.');
			}
		} catch (err) {
			setError(err.message || 'Erro ao processar pagamento.');
		} finally {
			setLoading(false);
		}
	};

	const closeSideBar = () => {
		active(false);
	};

	return (
		<div className='container-all'>
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
					<label>Dados do cartão</label>

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

				{error && <p className="error">{error}</p>}

				{success && <p className="success">Pagamento realizado com sucesso!</p>}

				<button type="submit" disabled={!stripe || loading}>
					{loading ? 'Processando...' : 'Realizar compra!'}
				</button>
			</form>
		</div>
	);
}
