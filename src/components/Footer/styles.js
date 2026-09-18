import styled from 'styled-components';

export const Footer = styled.div`
  height: 110px;
  width: 99vw;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #3f1d0c;
  display: flex;
  gap: 28%;
  justify-content: center;
  align-items: center;
`;

export const FooterLeft = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 14%;
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
    width: 18%;
    height: 65px;
    color: #fff;
    font-size: 16px;

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
    align-items: center;
    flex-direction: column;
    width: 14%;
    height: 50px;
    color: #fff;
    margin-right: 20px;
    font-size: 16px;

    img {
        width: 22px;
        margin: 5px 3px;
    }
`;
