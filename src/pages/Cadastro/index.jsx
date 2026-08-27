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

import { Title } from '../../components/Title';
import logoGoogle from '../../assets/img/google.png';
import logoApple from '../../assets/img/apple.png';

export function CadastroUser() {

    const navigate = useNavigate();

    return (
        <Container>
            <ContainerMain>
                <Title />

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
                        <img src={logoGoogle} alt='Google' />
                        <Name>Google</Name>
                    </GoogleContainer>

                    <AppleContainer>
                        <img src={logoApple} alt='Apple' />
                        <Name>Apple</Name>
                    </AppleContainer>
                </ContainersSocial>

                <EndParagraph>Já tem uma conta?<a onClick={() => navigate('/')}>Entrar</a></EndParagraph>
            </ContainerMain>
        </Container>
    );
}