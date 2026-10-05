import styled from 'styled-components';

export const ProductImage = styled.img`
    width: 80px;

    @media screen and (max-width: 540px){
        width: 40px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        background-color: ${(props) => props.theme.brightOrange};
        opacity: 0.8;
        border: none;

        &:hover {
            opacity: 0.7;
            box-shadow: 0 0 0 3px rgba(232, 120, 24, 0.12);
        }

        .ri-subtract-line, .ri-add-line {
            font-weight: bold;
            font-size: 16px;

            @media screen and (max-width: 600px){
                font-size: 10px;
            }
        }

        @media screen and (max-width: 600px){
            height: 15px;
            width: 15px;
        }
    }
`;

export const EmptyCart = styled.td`
    padding: 24px;
    text-align: center;
    font-weight: bold;
`;

export const TrashImage = styled.img`
    width: 25px;
    cursor: pointer;
    transition: transform 0.9s ease;

    &:hover {
        transform: scale(1.20);
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`;
