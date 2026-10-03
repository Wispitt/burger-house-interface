import styled from 'styled-components';

export const IconAdd = styled.img`
    width: 3vw;
    max-width: 60px;
    margin: 0 10px 8px 0;
    transition: transform 0.6s ease;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }

    @media screen and (max-width: 1480px){
        width: 3.5vw;
    }

    @media screen and (max-width: 1180px){
        width: 4.5vw;
    }

    @media screen and (max-width: 900px){
        width: 5.5vw;
    }

    @media screen and (max-width: 725px){
        width: 6.5vw;
    }

    @media screen and (max-width: 600px){
        width: 9.5vw;
    }

    @media screen and (max-width: 520px){
        width: 12vw;
    }
`;
