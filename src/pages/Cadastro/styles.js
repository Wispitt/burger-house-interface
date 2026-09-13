import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const Container = styled.div`
    background-image: url(${backGround});
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const ContainerMain = styled.div`
    width: 29%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const IconLogo = styled.img`
    width: 70px;
`;

export const Paragraph = styled.p`
    margin-top: 5px;
    text-align: center;
    font-size: 13px;
    font-family: "Roboto", sans-serif;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 88%;

    p {
        margin-left: 5px;
    }
`;

export const ContainersForm = styled.div`
    width: 100%;
    font-weight: 600;
    display: flex;
    flex-direction: column;

    span {
        font-size: 12px;
        margin-left: 5px;
        color: #c50233;
        font-weight: 600;
        height: 20px;
    }
`;

export const InputLogin = styled.input`
    width: 100%;
    height: 38px;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 10px;
    font-size: 13px;
    border: 1px solid black;
`;

export const ContainersSocial = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 50%;

    img {
        width: 20px;
    }
`;

export const Name = styled.h3`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: #cf3057;
        text-decoration: underline;
    }
`;

export const EndParagraph = styled.p`
    display: flex;
    margin-top: 15px;
    font-size: 18px;
    margin-bottom: 50px;

    a {
        margin-left: 3px;
        font-weight: 600;
        color: #cf3057;

        &:hover {
            text-decoration: underline;
        }

        &:active {
            color: #e72525;
        }
        
    }
`;

export const GoogleContainer = styled.div`
    display: flex;
    gap: 3px;
    height: 20px;
`;

export const AppleContainer = styled.div`
    display: flex;
    gap: 3px;
    height: 22px;
`;
