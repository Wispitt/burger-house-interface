import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 110px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: ${(props) => props.theme.deepBrown};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1260px){
        p, h4 {
            font-size: 11px;
        }
    }
`;

export const FooterLeft = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 70%;
    height: 50px;
    font-size: 13px;
    color: #fff;
    margin-left: 20px;
`;

export const FooterMain = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    height: 65px;
    color: #fff;
    font-size: 13px;

    img {
        width: 22px;
        margin: 0 9px;
        transition: transform 0.9s ease;

        &:hover {
        transform: scale(1.4);
        cursor: pointer;
        }
    }
`;

export const FooterRight = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
    width: 70%;
    height: 50px;
    color: #fff;
    margin-right: 20px;
    font-size: 13px;

    img {
        width: 22px;
        margin: 5px 7px 5px 0;
    }

    @media screen and (max-width: 1090px){

        img {
            width: 17px;
        }
    }
`;
