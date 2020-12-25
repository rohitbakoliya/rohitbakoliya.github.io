import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
    }
    body, html{
        height: 100%;
        font-display: fallback !important;
    }
    body{
        overflow-x: hidden;
    }
    h1, h2, h3, h4, h5, h6{
        margin: 10px 0;
        line-height: 140%;
    }
    p {
        font-size: 16px;
        margin: 0;
        line-height: 150%;
    }
    ul {
        list-style: none;
        padding: 0;
        font-size: 14px;
        line-height: 150%;
    }

`;
export default GlobalStyles;
