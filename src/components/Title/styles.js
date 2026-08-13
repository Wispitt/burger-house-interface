import styled from 'styled-components';

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    h1 {
        font-size: 184%;
        font-family: "Sekuya", system-ui;
        color: #4d2b12;
    }
`

export const IconLogo = styled.img`
    width: 50px;
`;

export const SnackBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 7px;

    color: black;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;

    &::before, &::after {
        content: "";
        width: 50px;
        height: 2px;
        background: black;
    }
`