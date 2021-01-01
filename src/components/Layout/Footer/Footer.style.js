import styled from 'styled-components';
import Wrapper from '../../common/Wrapper';

export const FooterWrapper = styled.footer`
    width: 100vw;
    padding: 10px;
    background: ${p => (p.theme.dark ? p.theme.secondaryColor : p.theme.gradient)};

    p,
    .emoji {
        font-size: 1rem;
        line-height: 35px;
        color: white;
    }

    a {
        color: ${p => (p.theme.dark ? p.theme.primaryColor : p.theme.secondaryColor)};
        &:hover {
            color: ${p => p.theme.primaryText};
        }
    }
`;

export const FooterContent = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
