import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Scrollbar } from './Scrollbar';

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
    #___gatsby {
        overflow-x: hidden;
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
    .invalid {
        color: #e81b1b !important;
        box-shadow: 0 0 0px 1px #e81b1b;
    }
    h1, h2, h3, h4, h5, h6{
        margin: 10px 0;
        line-height: 140%;
    }
    p {
        font-size: 16px;
        margin: 0;
        line-height: 150%;
        font-family: ${p => p.theme.secondaryFontFamily};
        color: ${p => p.theme.primaryText}
    }
    ul {
        list-style: none;
        padding: 0;
        font-size: 14px;
        line-height: 150%;
    }

    /* Scrollbar css */
    @media all and (min-width: 450px) {
        ${Scrollbar};
    }
`;
export default GlobalStyles;
