import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const MoreButtonWrapper = styled.div`
    display: table;
    margin: 0;
    margin-left: auto;
    a {
        font-weight: 700;
        font-family: ${p => p.theme.secondaryFontFamily};
        margin: 0px 0;
        padding: 12px 12px;
        &:hover {
            .fa-angle-double-right {
                transition: transform 200ms ease-in-out;
                transform: translateX(4px);
            }
        }
    }
`;

const MoreButton = ({ text, link, ...rest }) => (
    <MoreButtonWrapper>
        <Link to={link} {...rest}>
            {text + ' '}
            <FontAwesomeIcon aria-hidden="true" icon={['fas', 'angle-double-right']} />
        </Link>
    </MoreButtonWrapper>
);

export default MoreButton;
