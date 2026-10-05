import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    border: 1px solid ${(props) => props.theme.gold};
    border-radius: 7px;
    background-color: ${(props) => props.theme.peach};

    h4 {
        font-family: "Sekuya", system-ui;
        display: flex;
        align-items: center;
        margin: 10px 0 15px 20px;
        color: ${(props) => props.theme.darkBrown};
        font-weight: 500;
        font-size: 12px;

        &::after {
            content: '';
            height: 1.3px;
            width: 50%;
            background-color: ${(props) => props.theme.black};
            margin-left: 9px;

            @media screen and (max-width: 1360px){
                width: 40%;
            }

            @media screen and (max-width: 1170px){
                width: 30%;
            }

            @media screen and (max-width: 1050px){
                width: 60%;
            }

            @media screen and (max-width: 662px){
                width: 48%;
            }

            @media screen and (max-width: 520px){
                width: 35%;
            }
        }
    }

    @media screen and (max-width: 1050px){
        width: 90%;
        height: 100%;
        margin: 10px auto 0;
        padding-bottom: 10px;
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValueOrderAndDelivery = styled.div`
    position: absolute;
    left: 30px;
    font-weight: bold;
    display: grid;
    grid-gap: 4px 12vw;
    grid-template-areas: 
    'subtotal value-subtotal'
    'delivery value-delivery'
    ;

    .subtotal {
        grid-area: subtotal;
        font-size: 17px;
    }

    .value-subtotal {
        grid-area: value-subtotal;
        font-size: 17px;
    }

    .delivery {
        grid-area: delivery;
        width: 120px;
        font-size: 16px;
    }

    .value-delivery {
        grid-area: value-delivery;
    }

    p {
        color: black;
    }

    @media screen and (max-width: 1580px){
        gap: 4px 10vw;
    }

    @media screen and (max-width: 1300px){
        gap: 4px 7vw;
    }

    @media screen and (max-width: 1115px){
        gap: 4px 5vw;
    }
`;

export const ValueOrderAll = styled.div`
    position: absolute;
    top: 50px;
    font-size: 17px;
    font-weight: bold;
    width: 100%;
    margin: 40px 0 0 40px;
    display: grid;
    grid-gap: 0 20%;
    grid-template-areas: 
    'all-product value-all'
    ;

    .all-product {
        grid-area: all-product;
        margin-left: 20px;
    }

    .value-all {
        grid-area: value-all;
        width: 100px;
    }

    &::after {
        content: '';
        position: absolute;
        top: -17px;
        height: 1.3px;
        width: 90%;
        background-color: ${(props) => props.theme.gold};
    }

    h2, h3 {
        color: black;
    }
`;

export const ButtonOrder = styled.button`
    width: 60%;
    height: 35px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${(props) => props.theme.darkBrown};
    border: 1px solid ${(props) => props.theme.black};
    color: #fff;
    margin: 150px 0 17px 0;
    border-radius: 7px;
    transition: transform 0.8s ease;

    .ri-arrow-right-line {
        transition: transform 0.8s ease;
        display: inline-block;
    }

    &:hover {
        opacity: 0.9;
        transform: scale(1.02);

        .ri-arrow-right-line {
            transform: translateX(5px);
        }
    }

    &:active {
        opacity: 1;
    }

    @media screen and (max-width: 600px){
        width: 200px;
        height: 33px;
    }
`;

export const ButtonClearCart = styled.button`
    width: 60%;
    height: 35px;
    font-size: 15px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.8s ease;
    
    img {
        height: 22px;
        margin-right: 5px;
    }

    &:hover {
        background-color: ${(props) => props.theme.gray};
        transform: scale(1.02);
    }

    &:active {
        opacity: 0.7;
    }

    @media screen and (max-width: 600px){
        width: 200px;
        height: 33px;
    }
`;
