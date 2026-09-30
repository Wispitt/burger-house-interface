import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

import {
	Container,
	Section,
	BannerMain,
	Highlights,
	ProductsMain,
	ProductImage,
	NameProduct,
	ProductValue,
	Specifications,
	BannerCombo,
	ValueAndIcon,
	AllProducts,
	HouseSpecifications,
	ButtonMenu,
	HouseBannerCombo,
	ButtonCombo,
	ContainerMainAndButton,
} from './styles';

import bannerMain from '../../assets/img/banner-main.png';
import specifications from '../../assets/img/specifications-house.png';
import combosSpecial from '../../assets/img/combo-special.png';

import { CartButton } from '../../components';
import { formatePrice } from '../../utils/formatePrice';

export function Home() {
	const navigate = useNavigate();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const { data } = await api.get('/products');

			setProducts(data);
		}
		fetchProducts();
	}, []);

	return (
			<Container>
				<Section>
					<ContainerMainAndButton>
						<BannerMain src={bannerMain} />
						<ButtonMenu
							onClick={() => navigate('/hamburguers')}
							className="buttonMenu"
						>
							Ver Cardápio <i className="ri-arrow-right-line"></i>{' '}
						</ButtonMenu>
					</ContainerMainAndButton>
				</Section>

				<Highlights>
					<span>ESCOLHAS DIVERSAS</span>
				</Highlights>

				<AllProducts>
					{products
						.filter((product) => [44, 45, 46, 69].includes(product.id))
						.map((product) => (
							<ProductsMain key={product.id}>
								<ProductImage
									style={product.id === 44 ? { width: '40%' } : undefined}
									src={product.url}
								/>
								<NameProduct> {product.name} </NameProduct>
								<ValueAndIcon>
									<ProductValue> {formatePrice(product.price)} </ProductValue>
									<CartButton product={product} />
								</ValueAndIcon>
							</ProductsMain>
						))}

					<HouseBannerCombo>
						<BannerCombo src={combosSpecial} />
						<ButtonCombo>
							Combo <i className="ri-arrow-right-line"></i>
						</ButtonCombo>
					</HouseBannerCombo>

					<HouseSpecifications>
						<Specifications src={specifications} />
					</HouseSpecifications>
				</AllProducts>
			</Container>
	);
}
