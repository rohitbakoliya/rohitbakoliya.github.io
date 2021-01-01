import React from 'react';
import { Link } from 'gatsby';
import { Link as SLink } from 'react-scroll';

import { NavItem } from './Navbar.style';

const links = ['home', 'about', 'skills', 'projects', 'contact'];

const SmoothLinks = () => {
    return (
        <>
            {links.map(link => (
                <NavItem key={link}>
                    <SLink to={link} offset={-100} hashSpy={link !== 'home'}>
                        {link}
                    </SLink>
                </NavItem>
            ))}
        </>
    );
};

const DefaultLinks = () => {
    return (
        <>
            {links.map(link => (
                <NavItem key={link}>
                    <Link to={link !== 'home' ? `/#${link}` : `/`}>{link}</Link>
                </NavItem>
            ))}
        </>
    );
};

const NavLinks = React.memo(() => {
    return (
        <>
            {window && window.location.pathname === '/' ? <SmoothLinks /> : <DefaultLinks />}
            <NavItem>
                <Link to="/blog">blog</Link>
            </NavItem>
        </>
    );
});

export default NavLinks;
