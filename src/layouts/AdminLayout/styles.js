import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;
    background-color: ${(props) => props.theme.lightBlue};
    
    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100%;
        background-image: url(${backGround});
        background-size: 75%;
    }

    section {
        margin: 0 auto;
        padding: 40px 0;
        width: 100%;
        height: 100%;
        max-width: 1200px;
    }
`;