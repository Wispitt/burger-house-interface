import {
    Container,
    Section,
    Header,
    BannerMain,
    Highlights,
    Article,
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
    ContainerTop,
    ValueAndIcon
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

export function Home() {

    return (
        <Container>

            <Section>
                <ContainerTop>
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
                </ContainerTop>

                <BannerMain src={bannerMain} />
            </Section>

            <Highlights>
                <span>DESTAQUES</span>
            </Highlights>

            <Article>
                <ProdutsMain>
                    <ProductImage src={firstBurger} style={{width: '60%'}} />
                    <NameProduct>Classic Burger</NameProduct>
                    <p>Pão, carne, queijo, alface, tomate e maionese especial.</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 24,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>

                </ProdutsMain>

                <ProdutsMain>
                    <ProductImage src={secondBurger} />
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
                    <ProductImage src={milkShake} style={{width: '40%'}} />
                    <NameProduct>Milk Shake</NameProduct>
                    <p>Diversos sabores para deixar seu dia mais doce!</p>

                    <ValueAndIcon>
                        <ProductValue>R$ 16,90</ProductValue>
                        <IconAdd src={addIcon} />
                    </ValueAndIcon>

                </ProdutsMain>
            
                <BannerCombo src={combosSpecial} />
            </Article>

            <Footer>
                <FooterLeft>
                    <h4></h4>
                    <p></p>
                </FooterLeft>

                <FooterMain>
                    <p></p>
                    <img />
                </FooterMain>

                <FooterRight>
                    <p></p>
                    <img />
                </FooterRight>
            </Footer>

            <Specifications src={specifications} />


            

        </Container>
    )
}