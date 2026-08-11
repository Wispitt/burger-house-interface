import {
    Container,
    ContainerMain,
    Form,
    IconLogo,
    Titlle,
    Paragraph,
    InputLogin,
    ButtonEnter,
    DivGoogle,
    DivApple,
    Name
} from './styles';

import logoBurger from '../../assets/burger-icon.png';

export function Login() {
    return (
        <Container>
            <ContainerMain>
                <Titlle>
                    <IconLogo src={logoBurger} />
                    <h1>Burger House</h1>
                </Titlle>

                <Paragraph>Faça login para acessar sua conta.</Paragraph>
                <Form>
                    <div>
                        <p>E-mail</p>
                        <InputLogin type='email' placeholder='Digite seu email' />

                        <p>Senha</p>
                        <InputLogin type='password' placeholder='Digite sua senha' />

                        <a>Esqueceu a senha?</a>
                        <ButtonEnter type='button'>Entar</ButtonEnter>
                    </div>
                </Form>
                <p>ou continue com</p>

                <DivGoogle>
                    <Name>Google</Name>
                </DivGoogle>

                <DivApple>
                    <Name>Apple</Name>
                </DivApple>

                <p>Ainda não tem conta? <a>Cadastre-se</a></p>
            </ContainerMain>
        </Container>
    )
};