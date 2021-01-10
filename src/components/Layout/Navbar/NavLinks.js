import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Link as SLink } from 'react-scroll';

import { NavItem } from './Navbar.style';

const links = ['home', 'about', 'skills', 'projects', 'contact'];

const SmoothLinks = props => {
    return (
        <>
            {links.map(link => (
                <NavItem key={link}>
                    <SLink to={link} smooth offset={-100} hashSpy={link !== 'home'} onClick={props.closeMenuInMob}>
                        {link}
                    </SLink>
                </NavItem>
            ))}
        </>
    );
};

const DefaultLinks = props => {
    return (
        <>
            {links.map(link => (
                <NavItem key={link}>
                    <Link to={link !== 'home' ? `/#${link}` : `/`} onClick={props.closeMenuInMob}>
                        {link}
                    </Link>
                </NavItem>
            ))}
        </>
    );
};

const NavLinks = React.memo(props => {
    return (
        <>
            {window && window.location.pathname === '/' ? <SmoothLinks {...props} /> : <DefaultLinks {...props} />}
            <NavItem>
                <Link to="/blog" onClick={props.closeMenuInMob}>
                    blog
                </Link>
            </NavItem>
        </>
    );
});

NavLinks.prototype = {
    closeMenuInMob: PropTypes.func,
};
export default NavLinks;
