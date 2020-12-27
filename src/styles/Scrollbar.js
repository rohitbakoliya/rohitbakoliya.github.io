import { css } from 'styled-components';

export const Scrollbar = css`
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.accentColor};
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 7px;
        background-color: ${props => props.theme.accentColor};
        cursor: pointer;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.primaryColor};
        background-image: ${props => props.theme.gradient2};
    }

    ::-moz-scrollbartrack-vertical {
        background-color: ${props => props.theme.accentColor};
    }
    ::-moz-scrollbar {
        width: 10px;
        height: 7px;
        background-color: ${props => props.theme.accentColor};
        cursor: pointer;
    }
    ::-moz-scrollbarbutton-up {
        background-color: ${p => p.theme.primaryColor};
        background-image: ${props => props.theme.gradient2};
    }
`;
