import styled from 'styled-components';

import backGround from '../../assets/img/backgound-interface.jpeg';

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;
    
    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100%;
        background-image: url(${backGround});
        overflow-y: auto;
    }

    section {
        margin: 0 auto;
        padding: 40px 0;
        width: 100%;
        max-width: 1200px;
    }
`;