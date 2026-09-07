import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg'

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
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Paragraph = styled.p`
    text-align: center;
    font-size: 13px;
    font-family: "Roboto", sans-serif;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 88%;

    p {
        margin-left: 3px;
    }
`

export const ContainersForm = styled.div`
    width: 100%;
    margin-top: 14px;

    a {
        margin-left: 3px;
        color: #cc590c;

        &:hover {
        opacity: 0.7;
        }

        &:active {
            color: #e72525;
        }
        
    }
`

export const InputLogin = styled.input`
    width: 100%;
    height: 36px;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 10px;
    font-size: 13px;
    border: 1px solid black;
`

export const ButtonEnter = styled.button`
    width: 100%;
    height: 37px;
    border-radius: 8px;
    background-color: black;
    color: #fff;
    font-size: 18px;
    border: 1px solid black;
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 20px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }
`

export const ContainersSocial = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 50%;

    img {
        width: 20px;
    }
`

export const Name = styled.h3`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: #f38820;
    }
`

export const EndParagraph = styled.div`
    display: flex;
    margin-top: 15px;
    font-size: 16px;

    a {
        margin-left: 3px;
        color: #cc590c;

        &:hover {
        opacity: 0.7;
        }

        &:active {
            color: #e72525;
        }
        
    }
`

export const GoogleContainer = styled.div`
    display: flex;
    gap: 3px;
    height: 20px;
`

export const AppleContainer = styled.div`
    display: flex;
    gap: 3px;
    height: 22px;
`