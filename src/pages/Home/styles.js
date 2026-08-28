import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg'

export const Container = styled.div`
    background-image: url(${backGround});
    min-height: 100%;
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
    height: 50px;
    width: 25%;

    h1 {
        font-size: 240%;
        font-family: "Roboto", sans-serif;
        color: #4d2b12;
        margin-bottom: 3px;
    }
`

export const IconLogo = styled.img`
    width: 50px;
`;

export const SnackBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 43%;
    gap: 7px;
    color: black;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;

    &::before, &::after {
        content: "";
        width: 85px;
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

    i {
        font-size: 28px;
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.1);
        cursor: pointer;
        }
    }

    a {
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.1);
        color: #ca6806;
        }

        &:active {
        color: #ee8d2c;
        opacity: 0.8;
        }
    }
`;

export const BannerMain = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const ButtonMenu = styled.button`
    position: relative;
    bottom: 100px;
    left: 120px;
    width: 17%;
    height: 40px;
    border-radius: 18px;
    background-color: #f1a026;
    font-size: 20px;
    font-weight: bold;
    transition: transform 0.8s ease;

    &:hover {
        opacity: 0.9;
        transform: scale(1.1);

        span {
            animation: mover 0.4s infinite alternate;
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

export const Highlights = styled.div`
    margin-bottom: 23px;
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
  height: 67vh;
  grid-template-columns: 19.7% 19.7% 19.7% 19.7% 20.9%;
  grid-template-rows: 68% 30%;
  gap: 1px;
  border-radius: 15px;
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
        transform: scale(1.06);
    }

    p {
        font-size: 18px;
        font-weight: bold;
        width: 90%;
    }
`;

export const IconAdd = styled.img`
    width: 15%;
    margin: 0 8px 8px 0;
    transition: transform 0.6s ease;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const ProductImage = styled.img`
    width: 72%;
    margin-top: 20px;
`;

export const NameProduct = styled.h4`
    font-size: 18px;
    margin-top: 8px;
`;

export const ValueAndIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    height: 100%;
    margin-top: 2px;
`;

export const ProductValue = styled.h3`
    margin: 0 0 14px 2px;
    font-size: 24px;
`;

export const HouseSpecifications = styled.div`
   width: 90%;
   height: 100%;
   grid-column: 1/5;
`;

export const Specifications = styled.img`
    width: 110%;
    height: 147px;
    margin-top: 10px;
    border: 2px solid #ebc9a3;
    border-radius: 15px;
    transition: transform 0.9s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

export const HouseBannerCombo = styled.div`
    grid-row: 1/3;
    grid-column: 5/6;
`;

export const ButtonCombo = styled.button`
    position: absolute;
    right: 10%;
    bottom: -53%;
    width: 10%;
    height: 40px;
    border-radius: 18px;
    background-color: #f19710;
    font-size: 18px;
    font-weight: bold;
    transition: transform 0.8s ease;

    &:hover {
        opacity: 0.9;
        transform: scale(1.1);

        span {
            animation: mover 0.4s infinite alternate;
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
    height: 94.4%;
    border-radius: 20px;
`;

export const Footer = styled.div`
  grid-column: 1 / -1;
  height: 110px;
  width: 100%;
  border-radius: 7px;
  background-color: #402314;
  display: flex;
  gap: 28%;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

export const FooterLeft = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 14%;
    height: 50px;
    font-size: 13px;
    color: #fff;
    margin-left: 20px;
`;

export const FooterMain = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    width: 18%;
    height: 65px;
    color: #fff;
    font-size: 16px;

    img {
        width: 22px;
        margin: 0 9px;
        transition: transform 0.9s ease;

        &:hover {
        transform: scale(1.4);
        cursor: pointer;
        }
    }
`;

export const FooterRight = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 14%;
    height: 50px;
    color: #fff;
    margin-right: 20px;
    font-size: 16px;

    img {
        width: 22px;
        margin: 5px 7px;
    }
`;

