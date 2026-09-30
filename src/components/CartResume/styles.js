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
        font-size: 0.8vw;

        &::after {
            content: '';
            height: 1.3px;
            width: 12vw;
            background-color: ${(props) => props.theme.black};
            margin-left: 9px;
        }
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValueOrderAndDelivery = styled.div`
    text-align: left;
    font-weight: bold;
    margin-right: 150px;
    display: grid;
    grid-gap: 4px 60%;
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
        width: 100px;
        font-size: 17px;
    }

    .delivery {
        grid-area: delivery;
        width: 150px;
        font-size: 16px;
    }

    .value-delivery {
        grid-area: value-delivery;
    }

    p {
        color: black;
    }
`;

export const ValueOrderAll = styled.div`
    position: relative;
    font-size: 17px;
    font-weight: bold;
    width: 100%;
    margin: 40px 0 0 40px;
    gap: 60px;
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
    margin: 25px 0 17px 0;
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
        width: 15px;
        margin-right: 2px;
    }

    &:hover {
        background-color: ${(props) => props.theme.gray};
        transform: scale(1.02);
    }

    &:active {
        opacity: 0.7;
    }
`;
