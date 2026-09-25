import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const Container = styled.div`
    background-image: url(${backGround});
    padding-left: 1px;
`;

export const ContainerCart = styled.div`
    padding: 2% 4% 0 4%;
    height: 100vh;
    margin-bottom: 10vw;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Banner = styled.img`
    width: 100%;
    border-radius: 17px;
`;

export const Main = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    margin: 25px 0;
    padding: 0 1% 0 1%;
`;

export const CartInterfaceMain = styled.div`
    position: relative;
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
        font-size: 0.8vw;

        &::after {
            content: '';
            height: 1.3px;
            width: 52vw;
            background-color: black;
            margin-left: 9px;
        }
    }
`;

export const UserItems = styled.div`
    height: 100%;
    padding-left: 20px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const ButtonReturn = styled.button`
    position: relative;
    bottom: 11px;
    width: 200px;
    height: 37px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 7px;
    margin-left: 20px;

    &:hover {
        background-color: #acacac46;
    }

    &:active {
        background-color: #acacac70;
    }
`;
