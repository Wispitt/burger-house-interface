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
    ButtonCombo
} from './styles'

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
import pixIcon from '../../assets/img/pix-icon.jpg';

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
                    <a><span>Início</span></a>
                    <a>Cardápio</a>
                    <a>Promoções</a>
                    <a>Sobre nós</a>
                    <a>Contato</a>
                    <i class="ri-shopping-cart-line"></i>
                    <i class="ri-user-3-line"></i>
                </Header>

                <BannerMain src={bannerMain} />
                <ButtonMenu>Ver Cardápio <i class="ri-arrow-right-line"></i> </ButtonMenu>
            </Section>

            <Highlights>
                <span>DESTAQUES</span>
            </Highlights>

            <AllProducts>
                <ProductsMain>
                    <ProductImage src={firstBurger} style={{ width: '60%' }} />
                    <NameProduct>Classic Burger</NameProduct>
                    <p>Pão, carne, queijo, alface, tomate e maionese especial.</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 24,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProductsMain>

                <ProductsMain>
                    <ProductImage src={secondBurger} style={{ width: '68%' }} />
                    <NameProduct>Bacon House</NameProduct>
                    <p>Pão, carne, queijo, bacon crocante, cebola caramelizada e molho especial.</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 32,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProductsMain>

                <ProductsMain>
                    <ProductImage src={frenchFries} />
                    <NameProduct>Batata Frita</NameProduct>
                    <p>Porção de batata frita e crocante.</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 12,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProductsMain>

                <ProductsMain>
                    <ProductImage src={milkShake} style={{ width: '40%' }} />
                    <NameProduct>Milk Shake</NameProduct>
                    <p>Diversos sabores para deixar seu dia mais doce!</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 16,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>
                </ProductsMain>
 
                <HouseBannerCombo>
                    <BannerCombo src={combosSpecial} />
                    <ButtonCombo>Combo <i class="ri-arrow-right-line"></i></ButtonCombo>
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
                        <img src={instagramIcon} alt='Instagram' />
                        <img src={facebookIcon} alt='Facebook' />
                    </div>
                </FooterMain>

                <FooterRight>
                    <p>Formas de pagamento</p>
                    <div>
                        <img src={visaIcon} alt='Visa' />
                        <img src={masterCardIcon} alt='Mastercard' />
                        <img src={eloIcon} alt='Elo' />
                        <img src={pixIcon} alt='Pix' />
                    </div>
                </FooterRight>
            </Footer>

        </Container>
    )
}




