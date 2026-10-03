import styled from 'styled-components';
import ReactSelect from 'react-select';

import { Button } from '../../../components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;

    ::placeholder {
        font-size: 14px;
        font-weight: 500;
        word-spacing: 1px;
    }
`;

export const Form = styled.form`
    border-radius: 20px;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.lightBlack};
    padding: 30px 32px 15px 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const InputGrup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.label`
    color: ${(props) => props.theme.lightBlack};
    font-size: 14px;
    font-weight: 600;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    padding: 0 12px;
    border: 1px solid ${(props) => props.theme.lightBlack};

    
`;

export const ErrorMessage = styled.span`
    font-size: 12px;
    margin:  4px 0 0 5px;
    color: ${(props) => props.theme.red};
    font-weight: 700;
    letter-spacing: 0.5px;
    word-spacing: 1px;
    line-height: 10%;
    height: 1px;
`;

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed ${(props) => props.theme.lightBlack};
    border-radius: 5px;
    padding: 10px;
    margin-top: 8px;
    display: flex;
    color: ${(props) => props.theme.lightBlack};

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 1;
    }

    input {
        display: none;
    }

    > svg {
        font-size: 22px;
        fill: ${(props) => props.theme.lightBlack};
        margin-right: 4px;
    }
`;

export const Select = styled(ReactSelect)`
    border: 1px solid ${(props) => props.theme.lightBlack};
    border-radius: 5px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 15px;
`;

export const ContainerCheckBox = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
    margin-top: 10px;
    letter-spacing: 0.5px;
    word-spacing: 1px;

    input {
        cursor: pointer;
    }
`;
