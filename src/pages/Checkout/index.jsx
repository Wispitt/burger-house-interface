import { useLocation, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

import { stripePromise } from '../../config/stripeConfig';
import { CheckoutForm } from '../../components';
import { toast } from 'react-toastify';

export function Checkout() {
	const navigate = useNavigate();
	const {
		state: { clientSecret },
	} = useLocation();

	if (!clientSecret) {
		setTimeout(() => {
			return navigate('/carrinho');
		}, 1000);
		
		toast.error('Error! Tente novamente', {
			position: 'top-right',
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	}

	return (
		<Elements stripe={stripePromise} options={{ clientSecret }}>
			<CheckoutForm />
		</Elements>
	);
}
