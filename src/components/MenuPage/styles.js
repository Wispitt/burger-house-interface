import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const AllContent = styled.div`
    background-image: url(${backGround});
    background-position: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
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

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 25%;

    h1 {
        margin-left: 28px;
        font-size: 140%;
        height: 15px;
        font-family: "Sekuya", system-ui;
        color: ${(props) => props.theme.brown};
        margin-bottom: 3px;
    }
`;

export const SnackBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 43%;
    gap: 7px;
    color: black;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 4px;

    &::before, &::after {
        content: "";
        width: 86px;
        height: 2px;
        background: ${(props) => props.theme.black};
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 22px;
    width: 100%;
    position: relative;
    bottom: 51px;
    right: 10px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;

    span {
            color: ${(props) => props.theme.burgundy};
            cursor: pointer;
            border-bottom: 2.9px solid ${(props) => props.theme.burgundy};

            &:hover {
                opacity: 0.6;
            }
        }

    i {
        font-size: 28px;
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.2);
        cursor: pointer;
        }
    }

    a {
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.1);
        color: ${(props) => props.theme.burgunreddy};
        }

        &:active {
        opacity: 0.5;
        }
    }
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
`;

export const Banner = styled.img`
    position: relative;
    width: 100%;
    height: 200px;
`;

export const AllButtonsMenus = styled.div`
    width: 100%;
    display: flex;
`;

export const ButtonsMenus = styled.button`
    font-family: "Sekuya", system-ui;
    position: relative;
    bottom: -90px;
    width: 12%;
    margin-left: 20px;
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

    @media screen and (max-width: 1350px){
        display: none;
    }
`;

export const MenuProducts = styled.div`
    
`;