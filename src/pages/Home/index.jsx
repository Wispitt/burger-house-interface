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
    FooterRight
} from './styles'

import { Title } from "../../components/Title"

import userIcon from '../../assets/img/user-icon.png';
import cartIcon from '../../assets/img/cart-icon.png';
import bannerMain from '../../assets/img/banner-main.png';
import logoBurger from '../../assets/img/burger-icon.png';
import firstBurger from '../../assets/img/first-burger.png';
import secondBurger from '../../assets/img/second-burger.png';
import frenchFries from '../../assets/img/french-fries.jpg';
import milkShake from '../../assets/img/milk-shake.jpg';
import addIcon from '../../assets/img/add-cart-icon.png';
import specifications from '../../assets/img/specifications-house.png';
import combosSpecial from '../../assets/img/combo-special.jpg';

export function Home() {

    return (
        <Container>

            <Section>
                <Title />

                <Header>
                    <a>Início</a>
                    <a>Cardápio</a>
                    <a>Promoções</a>
                    <a>Sobre nós</a>
                    <a>Contato</a>
                    <img src={userIcon} alt="user" />
                    <img src={cartIcon} alt="cart" />
                </Header>

                <BannerMain src={bannerMain} />

                <Highlights>
                    <span>DESTAQUES</span>
                </Highlights>
            </Section>

            <Article>
                <ProdutsMain>
                    <ProductImage src={firstBurger} />
                    <NameProduct>Classic Burger</NameProduct>
                    <p>Pão, carne, queijo, alface, tomate e maionese especial.</p>
                    <ProductValue>R$ 24,90</ProductValue>
                    <img src={addIcon} />
                </ProdutsMain>

                <ProdutsMain>
                    <ProductImage src={secondBurger} />
                    <NameProduct>Bacon House</NameProduct>
                    <p>Pão, carne, queijo, bacon crocante, cebola caramelizada e molho especial.</p>
                    <ProductValue>R$ 32,90</ProductValue>
                    <img src={addIcon} />
                </ProdutsMain>

                <ProdutsMain>
                    <ProductImage src={frenchFries} />
                    <NameProduct>Batata Frita</NameProduct>
                    <p>Poção de batata frita e crocante.</p>
                    <ProductValue>R$ 12,90</ProductValue>
                    <img src={addIcon} />
                </ProdutsMain>

                <ProdutsMain>
                    <ProductImage src={milkShake} />
                    <NameProduct>Milk Shake</NameProduct>
                    <p>Diversos sabores para deixar seu dia mais doce!</p>
                    <ProductValue>R$ 16,90</ProductValue>
                    <img src={addIcon} />
                </ProdutsMain>

                <Specifications src={specifications} />

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
            
        </Container>
    )
}