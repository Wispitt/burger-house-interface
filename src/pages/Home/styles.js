import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg'

export const Container = styled.div`
    background-image: url(${backGround});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2% 4% 0 4%;
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
    justify-content: start;
    height: 50px;
    width: 43%;

    h1 {
        font-size: 184%;
        font-family: "Sekuya", system-ui;
        color: #4d2b12;
    }
`

export const IconLogo = styled.img`
    width: 50px;
`;

export const SnackBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 40px;
    width: 43%;
    gap: 7px;

    color: black;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;

    &::before, &::after {
        content: "";
        width: 90px;
        height: 2px;
        background: black;
    }
`;

export const ContainerTop = styled.div`
    

`;

export const Header = styled.div`
    display: flex;
    justify-content: end;
    align-items: start;
    gap: 20px;
    width: 100%;
    position: relative;
    bottom: 51px;
    right: 10px;
    font-size: 18px;

    img {
        width: 17px;

        &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }

    }

    a {
        &:hover {
        color: #ee8d2c;
    }

    &:active {
        color: #ca6806;
    }
    }
`;

export const BannerMain = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const Highlights = styled.div`
    width: 100px;
    height: 30px;
    margin: 17px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43%;
    gap: 7px;
    font-weight: 700;
    letter-spacing: 2px;

    &::before, &::after {
        content: "";
        width: 70px;
        height: 2px;
        background: black;
    }
`;

export const Article = styled.div`
    height: auto;
`;

export const AllProducts = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 18%;
    grid-template-rows: 61% 30%;
`;

export const ProdutsMain = styled.div`
    border: 2px solid #ebc9a3;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 0 6px;
    background-color: #fce6ce;

    p {
        font-size: 2vh;
        width: 80%;
    }
`;

export const IconAdd = styled.img`
    width: 17%;
    margin: 0 5px 6px 0;
`;

export const ProductImage = styled.img`
    width: 75%;
    margin-top: 10px;
`;

export const NameProduct = styled.h4`
    font-size: 18px;
    margin-top: 10px;
`;

export const ValueAndIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    height: 100%;
`;

export const ProductValue = styled.h3`
    margin: 0 0 14px 2px;
    font-size: 25px;
`;

export const Specifications = styled.img`
    width: 90%;
    grid-column: 1/5;
`;

export const BannerCombo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    grid-row: 1/3;
    grid-column: 5/6;
`;

export const Footer = styled.div`
    border-radius: 10px;
    height: 100px;
    width: 101%;
    background-color: #402314;
    display: flex;
    justify-content: space-between;
`;

export const FooterLeft = styled.div`
    width: 200px;
    border: 1px solid red;
`;

export const FooterMain = styled.div`
    width: 200px;
    border: 1px solid red;
`;

export const FooterRight = styled.div`
    width: 200px;
    border: 1px solid red;
`;

