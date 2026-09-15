import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Container, ContainerProducts } from './styles';

export function CarouselBurger() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const { data } = await api.get('/products');

				console.log(data.url);
				setProducts(data);
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			}
		}

		fetchProducts();
	}, []);

	const [emblaRef] = useEmblaCarousel({ loop: true });

	return (
		<Container>
			<div className='embla' ref={emblaRef}>
				<div className='embla__container' style={{ display: 'flex' }}>
					{products.map((product) => (
						<div className='embla__slide' key={product.id} style={{ flex: '0 0 auto' }}>
							<ContainerProducts imgURL={product.url}>
								{product.name}
							</ContainerProducts>
						</div>
					))}
				</div>
			</div>
		</Container>
);
}
