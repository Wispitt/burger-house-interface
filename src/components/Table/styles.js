import styled from 'styled-components';

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: transparent;
`;

export const Header = styled.thead`
     
`;

export const Tr = styled.tr`
    font-size: 20px;

    @media screen and (max-width: 1050px){
        font-size: 2vw;
    }

    @media screen and (max-width: 540px){
        font-size: 2.3vw;
    }
`;

export const Th = styled.th`
    padding: 16px;
    text-align: left;
    color: ${(props) => props.theme.lightBlack};

    @media screen and (max-width: 600px){
        padding: 16px 0 0 0;
    }
`;

export const Td = styled.td`
    padding: 16px;
    color: ${(props) => props.theme.lightBlack};
    font-weight: 500;
    line-height: 115%;

    @media screen and (max-width: 600px){
        padding: 0;
    }
`;

export const Body = styled.tbody`

`;