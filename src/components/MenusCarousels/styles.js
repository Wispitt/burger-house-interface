import styled from 'styled-components';

export const Container = styled.div`
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .embla__container {
        display: flex;
        margin-top: 20px;
        padding-bottom: 20px;
    }

    .embla__slide {
        height: 400px;
        display: flex;
        flex: 0 0 20%;
        margin-left: 11px;
    }

    .embla {
        width: 89vw;
        overflow: hidden;
        position: relative;
        margin-right: 20px;
        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 0%);
        mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
        cursor: grab;

        &:active {
            cursor: grabbing;
        }
    };

    .buttonNext {
        font-size: 1vw;
        position: absolute;
        right: 20px;
        background-color: transparent;
        opacity: 0.8;
    }

    .buttonPrev {
        font-size: 1vw;
        position: absolute;
        left: 20px;
        background-color: transparent;
        opacity: 0.8;
    }
`;

export const ProductsMain = styled.div`
    border: 2px solid #ebc9a3;
    border-radius: 15px;
    width: 100%;
    height: 100%;
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
    width: 65%;
    margin-top: 30px;
`;

export const NameProduct = styled.h4`
    font-size: 21px;
    margin-top: 6px;
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
    margin: 0 0 20px 15px;
    font-size: 31px;
`;
