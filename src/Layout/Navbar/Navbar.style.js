import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper';

export const NavWrapper = styled.header`
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;

    height: 60px;
    width: 100vw;

    background-color: ${props => props.theme.secondaryColor};
    box-shadow: ${props => props.theme.shadowSmall};
    z-index: 100;

    .logo {
        margin-right: auto;
        cursor: pointer;

        img {
            flex-basis: 100px;
            width: 35px;
        }
    }

    @media ${props => props.theme.media.tablet} {
        display: none;
    }
`;

export const NavItem = styled.li`
    margin-left: 30px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    a {
        color: ${p => (p.theme.dark ? p.theme.primaryText : p.theme.primaryColor)};
    }

    a:hover {
        cursor: pointer;
        color: ${p => (p.theme.dark ? p.theme.primaryColor : p.theme.primaryText)};
    }
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    transition: 0.2s;
    margin: 0;
`;

export const NavContent = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
