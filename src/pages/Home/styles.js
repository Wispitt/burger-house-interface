import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg'

export const Container = styled.div`
    background-image: url(${backGround});
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 4% 0 4%;
    height: 250vh;
    height: 100vw;
`;

export const Section = styled.div`
    height: 100%;
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
    gap: 15px;
    width: 100%;
    position: relative;
    bottom: 51px;
    right: 10px;

    img {
        width: 15px;
    }
`;

export const BannerMain = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const Highlights = styled.div`
    width: 100px;
    height: 30px;
    margin: 7px 0;
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
margin-bottom: 20px;
    border: 1px solid;
    height: 40%;
    width: 96%;
    display: flex;
    
`;

export const ProdutsMain = styled.div`
    border: 2px solid #d1b390;
    border-radius: 15px;
    height: 19vw;
    width: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 0 6px;

    p {
        font-size: 2vh;
        width: 80%;
    }
`;

export const IconAdd = styled.img`
    width: 19%;
    margin: 0 5px 6px 0;
`;

export const ProductImage = styled.img`
    width: 80%;
`;

export const NameProduct = styled.h4`
    font-size: 18px;
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
`;

export const Specifications = styled.img`
    width: 10%;
    grid-column: 1/5;
`;

export const BannerCombo = styled.img`
    width: 25%;
    height: 95%;
    border-radius: 20px;
`;

export const Footer = styled.div`
    border: 1px solid;
    height: 50%;
    width: 96%;
`;

export const FooterLeft = styled.div``;

export const FooterMain = styled.div``;

export const FooterRight = styled.div``;

