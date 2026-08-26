import {
    Container,
    Section,
    Header,
    BannerMain,
    Highlights,
    ProdutsMain,
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
    ButtonCombo
} from './styles'

import { Title } from "../../components/Title"

import userIcon from '../../assets/img/user-icon.png';
import cartIcon from '../../assets/img/cart-icon.png';
import bannerMain from '../../assets/img/banner-main.png';
import logoBurger from '../../assets/img/burger-icon.png';

import firstBurger from '../../assets/img/first-burger.png';
import secondBurger from '../../assets/img/second-burger.png';
import frenchFries from '../../assets/img/french-fries.png';
import milkShake from '../../assets/img/milk-shake.png';
import addIcon from '../../assets/img/add-cart-icon.png';
import specifications from '../../assets/img/specifications-house.png';
import combosSpecial from '../../assets/img/combo-special.png';

import instagramIcon from '../../assets/img/instagram-icon.png';
import facebookIcon from '../../assets/img/facebook-icon.png';

import visaIcon from '../../assets/img/visa-icon.png';
import masterCardIcon from '../../assets/img/mastercard-icon.png';
import eloIcon from '../../assets/img/elo-icon.png';
import pixIcon from '../../assets/img/pix-icon.png';

export function Home() {

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
                    <a>Início</a>
                    <a>Cardápio</a>
                    <a>Promoções</a>
                    <a>Sobre nós</a>
                    <a>Contato</a>
                    <img src={cartIcon} alt="cart" />
                    <img src={userIcon} alt="user" />
                </Header>

                <BannerMain src={bannerMain} />
                <ButtonMenu>Ver Cardápio <span>➜</span></ButtonMenu>
            </Section>

            <Highlights>
                <span>DESTAQUES</span>
            </Highlights>

            <AllProducts>
                <ProdutsMain>
                    <ProductImage src={firstBurger} style={{ width: '60%' }} />
                    <NameProduct>Classic Burger</NameProduct>
                    <p>Pão, carne, queijo, alface, tomate e maionese especial.</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 24,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProdutsMain>

                <ProdutsMain>
                    <ProductImage src={secondBurger} style={{ width: '68%' }} />
                    <NameProduct>Bacon House</NameProduct>
                    <p>Pão, carne, queijo, bacon crocante, cebola caramelizada e molho especial.</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 32,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProdutsMain>

                <ProdutsMain>
                    <ProductImage src={frenchFries} />
                    <NameProduct>Batata Frita</NameProduct>
                    <p>Poção de batata frita e crocante.</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 12,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProdutsMain>

                <ProdutsMain>
                    <ProductImage src={milkShake} style={{ width: '40%' }} />
                    <NameProduct>Milk Shake</NameProduct>
                    <p>Diversos sabores para deixar seu dia mais doce!</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 16,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProdutsMain>

                <ButtonCombo>Ver Cardápio <span>➜</span></ButtonCombo>
                
                <HouseBannerCombo>
                    <BannerCombo src={combosSpecial} />
                </HouseBannerCombo>

                <HouseSpecifications>
                    <Specifications src={specifications} />
                </HouseSpecifications>
            </AllProducts>

            <Footer>
                <FooterLeft>
                    <h4>BURGER HOUSE SNACK BAR</h4>
                    <p>2024 Todos os direitos resevados.</p>
                </FooterLeft>

                <FooterMain>
                    <p>Siga-nos nas redes sociais!</p>
                    <div>
                        <img src={instagramIcon} />
                        <img src={facebookIcon} />
                    </div>
                </FooterMain>

                <FooterRight>
                    <p>Formas de pagamento</p>
                    <div>
                        <img src={visaIcon} />
                        <img src={masterCardIcon} />
                        <img src={eloIcon} />
                        <img src={pixIcon} />
                    </div>
                </FooterRight>
            </Footer>

        </Container>
    )
}




