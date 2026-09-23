import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const Container = styled.div`
    background-image: url(${backGround});
    height: 98vh;
`;

export const Header = styled.div`
    width: 96%;
    margin: 0 0 0 54px;
`;

export const Banner = styled.img`
    width: 100%;
    padding: 2% 4% 0 4%;
`;
export const CartItens = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    border: 1px solid #c9a879;
    border-radius: 7px;
    background-color: #f9e5cc;
    margin-right: 16px;

    h4 {
        font-family: "Sekuya", system-ui;
        display: flex;
        align-items: center;
        margin: 10px 0 0 20px;
        color: #3c2114;
        font-weight: 500;
        font-size: 14px;

        &::after {
            content: '';
            height: 1.5px;
            width: 84%;
            background-color: black;
            margin-left: 9px;
        }
    }
`;

export const Main = styled.div`
    height: 55%;
    width: 100%;
    display: flex;
    padding: 0 4% 0 4%;
    margin: 47px 0;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    border: 1px solid #c9a879;
    border-radius: 7px;
    background-color: #f9e5cc;
    margin-right: 16px;

    h4 {
        font-family: "Sekuya", system-ui;
        display: flex;
        align-items: center;
        margin: 10px 0 30px 20px;
        color: #3c2114;
        font-weight: 500;
        font-size: 13px;

        &::after {
            content: '';
            height: 1.3px;
            width: 38%;
            background-color: black;
            margin-left: 9px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValueOrder = styled.div`
    font-size: 17px;
    font-weight: bold;
    display: flex;
    width: 100%;
    margin: 5px 0 0 40px;
    gap: 60px;

    span {
        margin-left: 95px;
    }
`;

export const ValueOrderAll = styled.div`
    position: relative;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    width: 100%;
    margin: 30px 0 20px 40px;
    gap: 60px;

    &::after {
        content: '';
        position: absolute;
        top: -10px;
        height: 1.3px;
        width: 90%;
        background-color: #c9a879;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        margin-left: 105px;
        font-size: 25px;
    }
`;

export const ButtonReturn = styled.button`
    width: 200px;
    height: 25px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 7px;
    margin-left: 20px;
`;

export const ButtonOrder = styled.button`
    width: 60%;
    height: 35px;
    font-size: 14px;
    font-weight: bold;
    background-color: #3c2114;
    border: 1px solid black;
    color: #fff;
    margin: 25px 0 17px 0;
    border-radius: 7px;
`;

export const ButtonClearCart = styled.button`
    width: 60%;
    height: 35px;
    font-size: 12px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 7px;
`;
