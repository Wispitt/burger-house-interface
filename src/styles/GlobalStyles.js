import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        max-width: 1900px;
        outline: none;
    }

    button, a {
        cursor: pointer;
        border: none;
    }
`;
