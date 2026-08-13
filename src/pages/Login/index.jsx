import { useNavigate } from 'react-router-dom';

import {
    Container,
    ContainerMain,
    Form,
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

import { Title } from '../../components/Title'
import logoGoogle from '../../assets/img/google.png';
import logoApple from '../../assets/img/apple.png';

export function LoginUser() {

    const navigate = useNavigate()

    return (
        <Container>
            <ContainerMain>
                <Title />

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
                        <ButtonEnter type='button' onClick={() => navigate('/Home')}>Entrar</ButtonEnter>
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