import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { NextButton, PrevButton } from './EmblaButtons';
import { usePrevNextButtons } from './usePrevNextButtons';
import { CartButton } from '../CartButton';

import {
	Container,
	ProductsMain,
	ProductImage,
	NameProduct,
	ValueAndIcon,
	ProductValue,
} from './styles';

function Carousel({ categoryId }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const { data } = await api.get('/products');

				setProducts(data);
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			}
		}

		fetchProducts();
	}, []);

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const categoryProducts = products.filter(
		(product) => product.category?.id === categoryId,
	);

	return (
		<Container>
			<PrevButton
				className="buttonPrev"
				onClick={onPrevButtonClick}
				disabled={prevBtnDisabled}
			>
				Anterior
			</PrevButton>
			<NextButton
				className="buttonNext"
				onClick={onNextButtonClick}
				disabled={nextBtnDisabled}
			>
				Proximo
			</NextButton>

			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					{categoryProducts.map((product) => (
						<div className="embla__slide" key={product.id}>
							<ProductsMain>
								<ProductImage
								src={product.url}
								style={product.id === 44 ? { width: '34%' } : undefined}
								/>
								<NameProduct> {product.name} </NameProduct>
								<ValueAndIcon>
									<ProductValue> {product.price} </ProductValue>
									<CartButton />
								</ValueAndIcon>
							</ProductsMain>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}

export const CarouselBurger = () => <Carousel categoryId={2} />;
export const CarouselApps = () => <Carousel categoryId={1} />;
export const CarouselDrinks = () => <Carousel categoryId={3} />;
export const CarouselDesserts = () => <Carousel categoryId={4} />;
