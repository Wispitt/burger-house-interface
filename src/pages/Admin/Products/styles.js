import styled from 'styled-components';

export const Container = styled.div`
    .container-table {
        background-color: ${(props) => props.theme.peach2};
    }

    .icon-offer {
        font-size: 27px;
        color: ${(props) => props.theme.green};
    }

    td, th {
        font-size: 16px;
        font-weight: 500;
    }
`;

export const ProductImage = styled.img`
    width: 85px;
    border-radius: 16px;
`;

export const EditButton = styled.button`
    border: none;
    background-color: ${(props) => props.theme.peach2};
    height: 32px;
    width: 32px;
    border-radius: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;

    &:hover {
        background-color: ${(props) => props.theme.lightBlue};


        > svg {
            fill: ${(props) => props.theme.gold};
        }
    }

    &:active {
        opacity: 0.8;
    }
`;