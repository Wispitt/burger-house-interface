import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const AllContent = styled.div`
    background-image: url(${backGround});
    background-position: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 725px){
        background-position: 10%;
        background-position-y: -28%;
    }

    @media screen and (max-width: 520px){
        background-position: 10%;
        background-position-y: -50%;
    }
`;

export const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4% 0 4%;
`;

export const Section = styled.div`
    height: 40%;
    width: 96%;
    display: flex;
    flex-direction: column;
`;

export const ContainerMenuAndButtons = styled.div`
    background: linear-gradient(rgb(45, 28, 14));
    width: 100%;
    height: 270px;
    border-radius: 20px;

    h2 {
        font-family: "Sekuya", system-ui;
        font-size: 50px;
        font-weight: 500;
        color: ${(props) => props.theme.cream};
        margin: 35px 0 0 25px;
    }

    p {
        font-family: "Sekuya", system-ui;
        font-size: 15px;
        color: ${(props) => props.theme.cream};
        margin-left: 35px;
    }

    @media screen and (max-width: 725px){
        background: none;
        width: 100vw;
        padding-left: 55px;

        h2 {
            color: ${(props) => props.theme.black};
            margin: 0;
            font-size: 35px;
        }

        p {
            color: ${(props) => props.theme.black};
            margin: 0;
            font-size: 10px;
        }
    }
`;

export const Banner = styled.img`
    position: relative;
    width: 100%;
    height: 200px;

    @media screen and (max-width: 680px){
        position: absolute;
        left: 10px;
        width: 100%;
    }
`;

export const AllButtonsMenus = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 680px){
        position: absolute;
        left: 20px;
        width: 100%;
        flex-wrap: wrap;
    }
`;

export const ButtonsMenus = styled.button`
    font-family: "Sekuya", system-ui;
    position: relative;
    bottom: -90px;
    width: 160px;
    margin: 0 10px;
    height: 37px;
    border-radius: 18px;
    border: 1px solid ${(props) => props.theme.white};
    color: ${(props) => props.theme.cream};
    background-color: transparent;
    font-weight: 500;
    transition: transform 0.5s ease;

    i {
        font-size: 20px;
    }

    &:hover {
        opacity: 0.9;
        transform: scale(1.02);
        background-color: ${(props) => props.theme.brightOrange};


        i {
            animation: mover 0.6s infinite alternate;
             display: inline-block;

            @keyframes mover {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(6px);
                }
            }
        }
    }

    &:active {
        opacity: 1;
    }

    @media screen and (max-width: 725px){
        width: 120px;
        background-color: black;
        font-size: 11px;
    }

    @media screen and (max-width: 680px){
        margin-bottom: 10px;
    }
`;

export const MenuProducts = styled.div`
    
`;