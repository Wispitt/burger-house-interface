import styled from 'styled-components';

export const Container = styled.div`
    background-color: #171923;
    position: fixed;
    z-index: 9999;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 400px;
    left: ${(props) => props.sideBar ? '0' : '-100%'};
    animation: showSideBar .4s;

    i {
        position: fixed;
        margin: 32px 0 0 32px;
        font-size: 28px;
        transition: transform 0.6s ease;
        color: #9b9b9b;

        &:hover {
        transform: scale(1.2);
        cursor: pointer;
        }

        p {
            color: #fff;
        }
    }

    @keyframes showSideBar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 400px;
        }
    }
`;

export const Bar = styled.div`
    background-color: #0b0d13;
    box-shadow: 0 0 20px 3px;
    width: 100%;
    height: 100px;
`;

export const Content = styled.div`
    position: relative;
    top: 50px;
    display: flex;
    align-items: center;
    background-color: #1A202C;
    font-size: 20px;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;
    transition: transform 0.6s ease;

    &:hover {
        background-color: black;
        transform: scale(1.01);
    }

    a {
        color: red;
        transition: transform 0.6s ease;

        &:hover {
            transform: scale(1.02);
        }

        &:active {
            text-decoration: underline;
        }
    }
`;