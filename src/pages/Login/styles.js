import styled from 'styled-components';

import backGround from '../../assets/backgound-interface.jpeg'

export const Container = styled.div`
    background-image: url(${backGround});
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerMain = styled.div`
    width: 30%;
    height: 60%;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconLogo = styled.img`
    width: 70px;
`

export const Titlle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    h1 {
        font-size: 40px;
    }
`

export const Paragraph = styled.p`
    text-align: center;
    font-size: 15px;
    margin-bottom: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 88%;
`

export const InputLogin = styled.input`
    width: 100%;
    height: 30px;
`

export const ButtonEnter = styled.button`
    width: 100%;
    height: 30px;
    margin-top: 17px;
`

export const DivGoogle = styled.div`

`

export const DivApple = styled.div`

`

export const Name = styled.h3`

`