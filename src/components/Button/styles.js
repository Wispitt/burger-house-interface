import styled from 'styled-components';

export const Buttons = styled.button`
    width: 100%;
    height: 37px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.black};
    color: #fff;
    font-size: 18px;
    margin-bottom: 10px;
    font-size: 20px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }
`;
