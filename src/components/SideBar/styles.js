import styled from 'styled-components';

export const CoonatinerAll = styled.div`
    position: fixed;
    top: 0px;
    left: -300px;
    margin-left: 300px;
    width: 100vw;
    height: 204.2vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.4);
`;
export const Container = styled.div`
    background-color: #171923;
    position: fixed;
    z-index: 9999;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 400px;
    left: ${(props) => (props.sideBar ? '0' : '-100%')};
    animation: showSideBar .4s;

    .ri-user-3-line {
        position: fixed;
        margin: 32px 0 0 32px;
        font-size: 28px;
        color: #9b9b9b;
    }

    .ri-close-fill {
        position: absolute;
        right: 15px;
        top: 10px;
        font-size: 35px;
        color: #9b9b9b;

        &:hover {
        color: #d8d8d8;
        cursor: pointer;
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
    box-shadow: 0 0 16px 1px;
    width: 97%;
    height: 100px;

    p {
        position: absolute;
        color: #b1b1b1;
        right: 220px;
        top: 38px;
    }
`;

export const Content = styled.div`

    .data, .logout {
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
        transition: transform 0.6s ease;

        &:hover {
            color: white;
            background-color: black;
            transform: scale(1.02);
        }

        &:active {
            opacity: 0.7;
        }
    }
`;
