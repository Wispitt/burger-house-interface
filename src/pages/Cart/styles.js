import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const AllContent = styled.div`
    background-image: url(${backGround});
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    background-image: url(${backGround});
    background-position: 30%;
    padding-left: 1px;

    @media screen and (max-width: 450px){
        margin-bottom: 40px;
    }
`;

export const ContainerCart = styled.div`
    padding: 0 2% 0 2%;

    @media screen and (max-width: 600px){
        padding: 0;
    }
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
    height: 70vh;
    width: 100%;
    display: flex;
    margin: 25px 0;
    padding: 0 1% 0 1%;

    @media screen and (max-width: 1050px){
        flex-direction: column;
        margin-bottom: 280px;
    }

    @media screen and (max-width: 600px){
        flex-direction: column;
        margin-bottom: 90px;
    }
`;

export const CartInterfaceMain = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    border: 1px solid ${(props) => props.theme.gold};
    border-radius: 7px;
    background-color: ${(props) => props.theme.peach};
    margin-right: 16px;

    h4 {
        font-family: "Sekuya", system-ui;
        display: flex;
        align-items: center;
        margin: 10px 0 0 20px;
        color: ${(props) => props.theme.darkBrown};
        font-weight: 500;
        font-size: 17px;

        &::after {
            content: '';
            height: 1.3px;
            width: 52vw;
            background-color: ${(props) => props.theme.black};
            margin-left: 9px;

            @media screen and (max-width: 1360px){
                width: 48vw;
            }

            @media screen and (max-width: 1050px){
                width: 65vw;
            }

            @media screen and (max-width: 662px){
                width: 60vw;
            }

            @media screen and (max-width: 520px){
                width: 50vw;
            }

            @media screen and (max-width: 370px){
                width: 43vw;
            }
        }
    }

    @media screen and (max-width: 1050px){
        height: 140%;
        width: 100%;
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
    border: 1px solid ${(props) => props.theme.black};
    border-radius: 7px;
    margin-left: 20px;
    transition: transform 0.8s ease;

    .ri-arrow-left-line {
        font-weight: bold;
        font-size: 15px;
        margin-right: 5px;
        display: inline-block;
        transition: transform 0.8s ease;
    }

    &:hover {
        background-color: ${(props) => props.theme.gray};
        transform: scale(1.02);

        .ri-arrow-left-line {
            transform: translateX(-5px);
        }
    }

    &:active {
        opacity: 0.7;
    }

    @media screen and (max-width: 600px){
        width: 160px;
        height: 30px;
    }
`;
