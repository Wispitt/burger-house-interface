import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 55vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .embla__container {
        display: flex;
        margin-top: 20px;
        padding-bottom: 20px;

        @media screen and (max-width: 725px){
            flex-direction: column;
        }
    }

    .embla__slide {
        height: 400px;
        display: flex;
        flex: 0 0 20%;
        margin-left: 11px;

        @media screen and (max-width: 1480px){
            flex: 0 0 26%;
        }

        @media screen and (max-width: 1180px){
            flex: 0 0 28%;
        }

        @media screen and (max-width: 900px){
            flex: 0 0 37%;
            padding: 20px 0;
        }

        @media screen and (max-width: 725px){
            overflow: hidden;
            padding: 5px 0;
            justify-content: center;
        }
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

        @media screen and (max-width: 725px){
            cursor: default;

            &:active {
                cursor: default;
            }
        }
    };

    .buttonNext {
        z-index: 999;
        font-size: 1vw;
        position: absolute;
        right: -50px;
        background-color: transparent;
        opacity: 0.8;

        @media screen and (max-width: 1300px){
            display: none;
        }
    }

    .buttonPrev {
        z-index: 999;
        font-size: 1vw;
        position: absolute;
        left: -50px;
        background-color: transparent;
        opacity: 0.8;

        @media screen and (max-width: 1300px){
            display: none;
        }
    }

    @media screen and (max-width: 725px){
        overflow: hidden auto;
        scrollbar-width: none;
        display: flex;
        align-items: start;
        margin-bottom: 5px;
        height: 100vh;
        -webkit-mask-image: linear-gradient(to top, transparent 0%, black 4%, black 96%, transparent 0%);
        mask-image: linear-gradient(to top, transparent 0%, black 8%, black 96%, transparent 100%);
    }

    @media screen and (max-width: 520px){
        padding-top: 10px;
    }
`;

export const ProductsMain = styled.div`
    border: 2px solid ${(props) => props.theme.lightGold};
    border-radius: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: ${(props) => props.theme.lightCream};
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

    @media screen and (max-width: 1480px){
        height: 90%;
    }

    @media screen and (max-width: 725px){
        height: 400px;
        width: 78%;

        &:hover {
        transform: scale(1.03);
    }
    }

    @media screen and (max-width: 520px){
        height: 350px;
        width: 95%;
    }
`;

export const ProductImage = styled.img`
    width: 65%;
    margin-top: 30px;
`;

export const NameProduct = styled.h4`
    font-size: 21px;
    margin-top: 6px;

    @media screen and (max-width: 1480px){
        font-size: 18px;
    }
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
    font-size: 26px;

    @media screen and (max-width: 1480px){
        font-size: 23px;
    }
`;
