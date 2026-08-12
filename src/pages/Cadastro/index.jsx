import { useNavigate } from 'react-router-dom';

import {
    Container,
    ContainerMain,
    Form,
    IconLogo,
    Titlle,
    Paragraph,
    InputLogin,
    ButtonEnter,
    ContainersSocial,
    Name,
    ContainersForm,
    EndParagraph,
    GoogleContainer,
    AppleContainer,
    SnackBar
} from './styles';

import logoBurger from '../../assets/burger-icon.png';
import logoGoogle from '../../assets/google.png';
import logoApple from '../../assets/apple.png';

export function CadastroUser() {

    const navigate = useNavigate()

    return (
        <Container>
            <ContainerMain>
                <Titlle>
                    <IconLogo src={logoBurger} />
                    <h1>Burger House</h1>
                </Titlle>

                <SnackBar>
                    <span>SNACK BAR</span>
                </SnackBar>

                <Paragraph>Crie sua conta na Burger House</Paragraph>

                <Form>
                    <ContainersForm>
                        <p>Nome</p>
                        <InputLogin type='string' placeholder='Digite seu nome' />
                    </ContainersForm>

                    <ContainersForm>
                        <p>E-mail</p>
                        <InputLogin type='email' placeholder='Digite seu email' />
                    </ContainersForm>

                    <ContainersForm>
                        <p>Senha</p>
                        <InputLogin type='password' placeholder='Crie uma senha' />
                    </ContainersForm>

                    <ContainersForm>
                        <p>Confirmar senha</p>
                        <InputLogin type='password' placeholder='Confirme sua senha' />
                    </ContainersForm>

                    <ContainersForm>
                        <ButtonEnter type='button'>Cadastrar-se</ButtonEnter>
                    </ContainersForm>

                </Form>
                <p>ou cadastre-se com</p>

                <ContainersSocial>
                    <GoogleContainer>
                        <img src={logoGoogle}></img>
                        <Name>Google</Name>
                    </GoogleContainer>

                    <AppleContainer>
                        <img src={logoApple}></img>
                        <Name>Apple</Name>
                    </AppleContainer>
                </ContainersSocial>

                <EndParagraph>Já tem uma conta?<a onClick={() => navigate('/')}>Entrar</a></EndParagraph>
            </ContainerMain>
        </Container>
    )
};