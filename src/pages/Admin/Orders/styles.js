import Select from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`

    .container-table {
        background-color: ${(props) => props.theme.peach2};
    }

    td, th {
        font-size: 15px;
        font-weight: 500;
    }
`;

export const ProductImage = styled.img`
    height: 70px;
    margin: 5px 0 5px 10px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;
    border: 1px solid ${(props) => props.theme.lightBlack};
    border-radius: 5px;
    background-color: ${(props) => props.theme.peach2};
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px 0;
    gap: 50px;
`;

export const FilterOption = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => props.$isActive ? props.theme.burgundy : props.theme.lightBlack};
    border-bottom: ${(props) => props.$isActive ? `2px solid ${props.theme.burgundy}` : 'none'};
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    padding-bottom: 4px;

    &:hover {
        color: ${(props) => props.theme.burgundy};
    }

    &:active {
        opacity: 0.5;
    }
`;