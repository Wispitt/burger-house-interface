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
    AppleContainer
} from './styles';

import logoBurger from '../../assets/burger-icon.png';
import logoGoogle from '../../assets/google.png';
import logoApple from '../../assets/apple.png';

export function LoginUser() {

    const navigate = useNavigate()

    return (
        <Container>
            <ContainerMain>
                <Titlle>
                    <IconLogo src={logoBurger} />
                    <h1>Burger House</h1>
                </Titlle>

                <Paragraph>Faça login para acessar sua conta</Paragraph>
                <Form>
                    <ContainersForm>
                        <p>E-mail</p>
                        <InputLogin type='email' placeholder='Digite seu email' />
                    </ContainersForm>

                    <ContainersForm>
                        <p>Senha</p>
                        <InputLogin type='password' placeholder='Digite sua senha' />
                    </ContainersForm>

                    <ContainersForm>
                        <a>Esqueceu a senha?</a>
                        <ButtonEnter type='button'>Entar</ButtonEnter>
                    </ContainersForm>

                </Form>
                <p>ou continue com</p>

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

                <EndParagraph>Ainda não tem conta?<a onClick={() => navigate('/cadastro-de-usuario')}>Cadastre-se</a></EndParagraph>
            </ContainerMain>
        </Container>
    )
};