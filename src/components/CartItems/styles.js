import styled from 'styled-components';

export const ProductImage = styled.img`
    width: 80px;
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
        background-color: #dc9c41;
        opacity: 0.8;
        border: none;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const EmptyCart = styled.p`
    position: absolute;
    left: 10vw;
    top: 50%;
    font-size: 17/px;
    font-weight: bold;
`;

export const TrashImage = styled.img`
    width: 25px;
    cursor: pointer;
    transition: transform 0.9s ease;

    &:hover {
        transform: scale(1.20);
    }
`;
