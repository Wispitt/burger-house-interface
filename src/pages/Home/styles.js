import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const Container = styled.div`
    background-image: url(${backGround});
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2% 4% 0 4%;
    width: 100vw;
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
        color: #4d2b12;
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
        background: black;
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
            color: #bd2f47;
            cursor: pointer;
            &::after {
                content: '';
                position: absolute;
                bottom: 3px;
                right: 495px;
                width: 46px;
                height: 2.4px;
                background-color: #bd2f47;
            }

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
        color: #ca0627;
        }

        &:active {
        opacity: 0.5;
        }
    }
`;

export const ContainerMainAndButton = styled.div`
    position: relative;
`;

export const BannerMain = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const ButtonMenu = styled.button`
    font-family: "Sekuya", system-ui;
    position: absolute;
    bottom: 50px;
    left: 90px;
    width: 17%;
    height: 9%;
    border-radius: 18px;
    background-color: #f1a026;
    font-size: 1.1vw;
    font-weight: bold;
    transition: transform 0.8s ease;

    i {
        font-size: 20px;
    }

    &:hover {
        opacity: 0.9;
        transform: scale(1.1);

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

export const Highlights = styled.div`
    margin: 7px 0 20px 0;
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

export const AllProducts = styled.div`
  display: grid;
  width: 96%;
  height: 63vh;
  grid-template-columns: 19.7% 19.7% 19.7% 19.7% 20.9%;
  grid-template-rows: 64% 30%;
  gap: 1px;
  border-radius: 15px;

   @media screen and (max-width: 1320px){
        grid-template-columns: 25.2% 25.2% 25.2% 25.2%;
        grid-template-rows: 57% 30%;
    }

    @media screen and (max-width: 1100px){
        width: 80%;
        height: 60vh;
        grid-template-columns: 30% 30%;
        grid-template-rows: 50% 30% 30%;
    }
`;

export const ProductsMain = styled.div`
    border: 2px solid #ebc9a3;
    border-radius: 15px;
    width: 96%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: #fce6ce;
    transition: transform 0.9s ease;

    &:hover {
        transform: scale(1.05);
    }

    p {
        font-size: 18px;
        font-weight: bold;
        width: 90%;
        margin-top: 3px;
    }
`;

export const ProductImage = styled.img`
    width: 87%;
    margin-top: 30px;
`;

export const NameProduct = styled.h4`
    font-size: 21px;
    margin-top: 8px;
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
    font-size: 31px;
`;

export const HouseSpecifications = styled.div`
   width: 90%;
   height: 100%;
   grid-column: 1/5;

    @media screen and (max-width: 1320px){
        grid-column: 1/6;
    }
`;

export const Specifications = styled.img`
    width: 110%;
    height: 85%;
    margin-top: 10px;
    border: 2px solid #ebc9a3;
    border-radius: 15px;
    transition: transform 0.9s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

export const HouseBannerCombo = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 136.4%;

    @media screen and (max-width: 1320px){
        display: none;
    }
`;

export const ButtonCombo = styled.button`
    font-family: "Sekuya", system-ui;
    width: 63%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 18px;
    background-color: #f19710;
    font-size: 16px;
    font-weight: bold;
    transition: transform 0.8s ease;
    grid-column: 1;
    grid-row: 1;
    align-self: end;
    justify-self: center;

    i {
        font-size: 20px;
    }

    &:hover {
        opacity: 0.9;
        transform: scale(1.1);

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


`;

export const BannerCombo = styled.img`
    width: 100%;
    height: 545px;
    border-radius: 20px;
    grid-column: 1;
    grid-row: 1;
    transition: transform 0.9s ease;
`;
