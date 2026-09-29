import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 0 2.1%;
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
        color: ${(props) => props.theme.brown};
        margin-bottom: 3px;
    }
`;

export const SnackBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 7px;
    color: ${(props) => props.theme.black};
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
    color: ${({ ...props }) => (isActive(props) ? (props) => props.theme.burgundy : (props) => props.theme.black)};
    cursor: pointer;
    border-bottom: ${({ ...props }) => (isActive(props) ? '2.9px solid #bd2f47' : 'none')};
    transition: transform 0.6s ease, opacity 0.2s ease, color 0.2s ease;

    &:hover {
        opacity: ${({ ...props }) => (isActive(props) ? 0.7 : 1)};
        transform: ${({ ...props }) => (isActive(props) ? 'none' : 'scale(1.1)')};
        color: ${(props) => props.theme.burgundy};
    }
`;

export const CartIcon = styled.i`
    font-size: 28px;
    color: ${({ $isActiveCart }) => ($isActiveCart ? (props) => props.theme.burgundy : (props) => props.theme.black)};
    transition: transform 0.6s ease, opacity 0.2s ease, color 0.2s ease;
    transform: ${({ $isActiveCart }) => ($isActiveCart ? 'scale(1.1)' : 'none')};

    &:hover {
        opacity: ${({ $isActiveCart }) => ($isActiveCart ? 0.7 : 1)};
        transform: ${({ $isActiveCart }) => ($isActiveCart ? 'none' : 'scale(1.1)')};
        color: ${(props) => props.theme.burgundy};
    }
`;

export const UserIcon = styled.i`
    font-size: 28px;
    transition: transform 0.6s ease;
    
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 22px;
    width: 100%;
    position: relative;
    bottom: 39px;
    margin-top: 66px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    
    a {
        transition: transform 0.6s ease;

        &:hover {
        transform: scale(1.1);
        color: ${(props) => props.theme.red};
        }

        &:active {
        opacity: 0.5;
        }
    }
`;
