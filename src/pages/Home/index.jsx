import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

import {
	Container,
	Section,
	Header,
	BannerMain,
	Highlights,
	ProductsMain,
	ProductImage,
	NameProduct,
	ProductValue,
	Specifications,
	BannerCombo,
	Footer,
	FooterLeft,
	FooterMain,
	IconAdd,
	FooterRight,
	TitleWrapper,
	IconLogo,
	SnackBar,
	ValueAndIcon,
	AllProducts,
	HouseSpecifications,
	ButtonMenu,
	HouseBannerCombo,
	ButtonCombo,
	ContainerMainAndButton,
} from './styles';

import bannerMain from '../../assets/img/banner-main.png';
import logoBurger from '../../assets/img/burger-icon.png';

import addIcon from '../../assets/img/add-cart-icon.png';

import specifications from '../../assets/img/specifications-house.png';
import combosSpecial from '../../assets/img/combo-special.png';

import instagramIcon from '../../assets/img/instagram-icon.png';
import facebookIcon from '../../assets/img/facebook-icon.png';

import visaIcon from '../../assets/img/visa-icon.png';
import masterCardIcon from '../../assets/img/mastercard-icon.png';
import eloIcon from '../../assets/img/elo-icon.png';
import pixIcon from '../../assets/img/pix-icon.jpg';

export function Home() {
	const navigate = useNavigate();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const { data } = await api.get('/products');

				console.log(data);
				setProducts(data);
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			}
		}

		fetchProducts();
	}, []);

	return (
		<Container>
			<Section>
				<div>
					<TitleWrapper>
						<IconLogo src={logoBurger} alt="logo" />
						<h1>Burger House</h1>
					</TitleWrapper>

					<SnackBar>
						<span>SNACK BAR</span>
					</SnackBar>
				</div>
				<Header>
					<span>Início</span>
					<a onClick={() => navigate('/cardapio')}>Cardápio</a>
					<a>Promoções</a>
					<a>Sobre nós</a>
					<a>Contato</a>
					<i class="ri-shopping-cart-line"></i>
					<i class="ri-user-3-line"></i>
				</Header>
				<ContainerMainAndButton>
					<BannerMain src={bannerMain} />
					<ButtonMenu>
						Ver Cardápio <i class="ri-arrow-right-line"></i>{' '}
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
								<ProductValue> {product.price} </ProductValue>
								<IconAdd src={addIcon} />
							</ValueAndIcon>
						</ProductsMain>
					))}

				<HouseBannerCombo>
					<BannerCombo src={combosSpecial} />
					<ButtonCombo>
						Combo <i class="ri-arrow-right-line"></i>
					</ButtonCombo>
				</HouseBannerCombo>

				<HouseSpecifications>
					<Specifications src={specifications} />
				</HouseSpecifications>
			</AllProducts>

			<Footer>
				<FooterLeft>
					<h4>BURGER HOUSE SNACK BAR</h4>
					<p>2024 Todos os direitos reservados.</p>
				</FooterLeft>

				<FooterMain>
					<p>Siga-nos nas redes sociais!</p>
					<div>
						<img src={instagramIcon} alt="Instagram" />
						<img src={facebookIcon} alt="Facebook" />
					</div>
				</FooterMain>

				<FooterRight>
					<p>Formas de pagamento</p>
					<div>
						<img src={visaIcon} alt="Visa" />
						<img src={masterCardIcon} alt="Mastercard" />
						<img src={eloIcon} alt="Elo" />
						<img src={pixIcon} alt="Pix" />
					</div>
				</FooterRight>
			</Footer>
		</Container>
	);
}
