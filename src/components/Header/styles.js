import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';


export const Container = styled.div`
    background-image: url(${backGround});
    background-position-y: 23%;
    top: 0;
    z-index: 1000;
    padding: 0 2.3vw;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        justify-content: end;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;

    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;

    h1 {
        margin-left: 28px;
        font-size: 140%;
        height: 15px;
        font-family: "Sekuya", system-ui;
        color: ${(props) => props.theme.brown};
        margin-bottom: 3px;

        @media screen and (max-width: 900px){
            font-size: 125%;
        }
    }
`;

export const SnackBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 7px;
    color: ${(props) => props.theme.black};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 4px;

    &::before, &::after {
        content: "";
        width: 86px;
        height: 2px;
        background: black;

        @media screen and (max-width: 900px){
            width: 80px;
        }
    }

    @media screen and (max-width: 900px){
        font-size: 10px;
    }
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
`;

const isActive = ({ $isActive, $isActiveApps, $isActiveDrinks, $isActiveDesserts }) =>
    $isActive || $isActiveApps || $isActiveDrinks || $isActiveDesserts;

export const NavItem = styled.span`
    color: ${({ ...props }) => (isActive(props) ? (props) => props.theme.burgundy : (props) => props.theme.black)};
    cursor: pointer;
    border-bottom: ${({ ...props }) => (isActive(props) ? '2.9px solid #bd2f47' : 'none')};
    transition: transform 0.6s ease, opacity 0.2s ease, color 0.2s ease;

    &:hover {
        opacity: ${({ ...props }) => (isActive(props) ? 0.7 : 1)};
        transform: ${({ ...props }) => (isActive(props) ? 'none' : 'scale(1.1)')};
        color: ${(props) => props.theme.burgundy};
    }
`;

export const CartIcon = styled.i`
    font-size: 28px;
    color: ${({ $isActiveCart }) => ($isActiveCart ? (props) => props.theme.burgundy : (props) => props.theme.black)};
    transition: transform 0.6s ease, opacity 0.2s ease, color 0.2s ease;
    transform: ${({ $isActiveCart }) => ($isActiveCart ? 'scale(1.1)' : 'none')};

    &:hover {
        opacity: ${({ $isActiveCart }) => ($isActiveCart ? 0.7 : 1)};
        transform: ${({ $isActiveCart }) => ($isActiveCart ? 'none' : 'scale(1.1)')};
        color: ${(props) => props.theme.burgundy};
    }

    @media screen and (max-width: 800px){
        font-size: 20px;
    }
`;

export const UserIcon = styled.i`
    font-size: 28px;
    transition: transform 0.6s ease;
    
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }

    @media screen and (max-width: 800px){
        font-size: 20px;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 22px;
    width: 100%;
    position: relative;
    bottom: 39px;
    margin-top: 66px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    
    a {
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.1);
        color: ${(props) => props.theme.red};
        }

        &:active {
        opacity: 0.5;
        }
    }

    @media screen and (max-width: 1107px){
        font-size: 16px;
    }

    @media screen and (max-width: 900px){
        font-size: 15px;
    }

    @media screen and (max-width: 520px){
        font-size: 12px;
        gap: 15px;
    }

    @media screen and (max-width: 400px){
        font-size: 11px;
        gap: 14px;
    }
`;
