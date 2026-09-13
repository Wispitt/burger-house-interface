import { useNavigate } from 'react-router-dom';
import { CarouselBurger } from '../../components/MenusCarousels';

import { 
    Container,
    Section,
    TitleWrapper,
    IconLogo,
    SnackBar,
    Header,
    ContainerMenuAndButtons,
    ButtonsMenus,
    AllButtonsMenus,
    MenuProducts

} from './styles';

export function MenuBurger() {

    const navigate = useNavigate();

    return (
        <Container>
            <Section>
                <div>
                    <TitleWrapper>
                        <IconLogo />
                        <h1>Burger House</h1>
                    </TitleWrapper>
            
                    <SnackBar>
                        <span>SNACK BAR</span>
                    </SnackBar>
                </div>
                    <Header>
                        <a onClick={() => navigate('/home')}>Início</a>
                        <span>Cardápio</span>
                        <a>Promoções</a>
                        <a>Sobre nós</a>
                        <a>Contato</a>
                        <i class="ri-shopping-cart-line"></i>
                        <i class="ri-user-3-line"></i>
                    </Header>

                <ContainerMenuAndButtons>
                    <h2>NOSSO CARDÁPIO</h2>
                    <p>Escolha o que vai te deixa com água na boca</p>
                    <AllButtonsMenus>
                        <ButtonsMenus style={{backgroundColor: '#f19710'}}>Hambúrguers</ButtonsMenus>
                                    
                        <ButtonsMenus>Entradas</ButtonsMenus>

                        <ButtonsMenus>Bebidas</ButtonsMenus>

                        <ButtonsMenus>Sobremesas</ButtonsMenus>
                    </AllButtonsMenus>
                </ContainerMenuAndButtons>
            </Section>

            <MenuProducts>
                <CarouselBurger>

                </CarouselBurger>
            </MenuProducts>

        </Container>
    );
}