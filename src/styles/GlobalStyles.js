import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    /* Normalize css */
    ${normalize}

    *{
        box-sizing: border-box;
    }
    body, html{
        height: 100%;
        font-family: ${props => props.theme.fontFamily};
        font-size: cal(12px + 0.4vw);
        -webkit-font-smoothing: antialiased;
        font-display: fallback !important;
    }
    body{
        overflow-x: hidden;
        background-color: ${p => p.theme.bg};
        color: ${p => p.theme.primaryText};
        transition: background-color .2s;
    }

    a {
        color: ${p => p.theme.primaryColor};
        text-decoration: none;
    }
    a:hover {
        color: ${p => p.theme.primaryText};
    }

    .active {
        color: #383838;
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
