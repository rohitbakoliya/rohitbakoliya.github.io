import styled, { css } from 'styled-components';
import IconLink from './IconLink';

const common = css`
    border: none;
    background: ${props => props.theme.gradient};
    color: #f8f8f8;
    padding: 7px 10px;
    border-radius: 5px;
    transition: all 200ms ease-out;
    cursor: pointer;
    display: inline-block;
    text-align: center;
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

export const IconButton = styled(IconLink)`
    ${common}

    font-size: 18px;
    text-align: center;
    line-height: 0;
    padding: 10px;
    margin: 0;
    border-radius: 50%;
    transition: 0.2s;
    width: 38px;
    &:hover {
        transform: scale(1.05);
        transition: 0.2s;
    }
`;

export default Button;
