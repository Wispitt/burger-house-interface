import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg'

export const Container = styled.div`
    background-image: url(${backGround});
    display: grid;
    grid-template-rows: 62% 40% 40%;
    padding: 4% 6% 0 6%;
`;

export const Section = styled.div`
    border: 1px solid;
    height: 100%;
    width: 100%;
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
`

export const Header = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
    width: 47%;

    img {
        width: 15px;
    }
`;

export const BannerMain = styled.img`
    width: 100%;
`;

export const Highlights = styled.div`
    width: 100px;
    height: 30px;
    text-align: center;
    margin: 0 50%;
`;

export const Article = styled.div`
    border: 1px solid;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 80% 20%;
`;

export const ProdutsMain = styled.div`
    border: 1px solid;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 15px;
    }
`;

export const IconAdd = styled.img`
    width: 20%;
    display: flex;
    align-items: end;
    justify-content: end;
`;

export const ProductImage = styled.img`
    width: 80%;
`;

export const NameProduct = styled.h4``;

export const ProductValue = styled.h3`
    display: flex;
    align-items: start;
    justify-content: start;
`;

export const Specifications = styled.img`
    width: 10%;
    grid-column: 1/5;
`;

export const BannerCombo = styled.img`
    height: 100%;
    width: 100%;
`;

export const Footer = styled.div`
    border: 1px solid;
    height: 30%;
    width: 100%;
`;

export const FooterLeft = styled.div``;

export const FooterMain = styled.div``;

export const FooterRight = styled.div``;

