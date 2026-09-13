import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, ContainerProducts } from './styles';

export function CarouselBurger() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const { data } = await api.get('/products');

			console.log(data);
			setProducts(data);
		}

		fetchProducts();
	}, []);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2,
		},
	};

	return (
		<Container>
			<Carousel
			responsive={responsive}
			infinite={true}
			partialVisible={false}
			itemClass="carousel-items"
			>
				{products.map((product) => (
					<ContainerProducts key={product.id} imgURL={product.url}>
						{product.name}
					</ContainerProducts>
				))}
		</Carousel>

		</Container>
	);
}
