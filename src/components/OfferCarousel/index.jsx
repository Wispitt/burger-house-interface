import { api } from '../../services/api';
import { useEffect, useState } from 'react';

import { Container } from './styles';

export function OfferCarousel() {
	const [offer, setOffer] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const { data } = await api.get('/products');

			console.log(data);
			setOffer(data);
		}

		fetchProducts();
	});

	return (
		<Container>
			<h1>Olá</h1>
		</Container>
	);
}
