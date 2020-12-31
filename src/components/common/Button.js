import styled, { css } from 'styled-components';

const common = css`
    border: none;
    background: ${props => props.theme.gradient};
    color: #f8f8f8;
    padding: 7px 10px;
    border-radius: 5px;
    transition: all 200ms ease-out;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
    &:hover {
        transform: scale(1.05);
        color: #f8f8f8;
    }
`;

export const Button = styled.div`
    ${common}
    font-size: 12px;
    margin: 0px 0;
    padding: 12px 12px;
    border-radius: ${props => (props.round ? '50%' : '5px')};
    width: ${props => (props.width ? props.width : 'auto')};
    height: ${props => (props.height ? props.height : 'auto')};
`;

export default Button;
