import styled from 'styled-components';

export const Container = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;

    h1 {
        margin-left: 28px;
        font-size: 140%;
        height: 15px;
        font-family: "Sekuya", system-ui;
        color: #4d2b12;
        margin-bottom: 3px;
    }
`;

export const SnackBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 7px;
    color: black;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 4px;

    &::before, &::after {
        content: "";
        width: 86px;
        height: 2px;
        background: black;
    }
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
`;

const isActive = ({ $isActive, $isActiveApps, $isActiveDrinks, $isActiveDesserts }) =>
    $isActive || $isActiveApps || $isActiveDrinks || $isActiveDesserts;

export const NavItem = styled.span`
    color: ${({ ...props }) => (isActive(props) ? '#bd2f47' : 'black')};
    cursor: pointer;
    border-bottom: ${({ ...props }) => (isActive(props) ? '2.9px solid #bd2f47' : 'none')};
    transition: transform 0.6s ease, opacity 0.2s ease, color 0.2s ease;

    &:hover {
        opacity: ${({ ...props }) => (isActive(props) ? 0.7 : 1)};
        transform: ${({ ...props }) => (isActive(props) ? 'none' : 'scale(1.1)')};
        color: #bd2f47;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 22px;
    width: 100%;
    position: relative;
    bottom: 51px;

    margin-top: 66px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;

    i {
        font-size: 28px;
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.2);
        cursor: pointer;
        }
    }
    
    a {
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.1);
        color: #ca0627;
        }

        &:active {
        opacity: 0.5;
        }
    }
`;
