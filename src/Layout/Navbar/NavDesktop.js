import React from 'react';
import { Link as SLink } from 'react-scroll';
import { NavItem, NavItems, NavContent } from './Navbar.style';
import NavLinks from './NavLinks';
import logo from '../../static/logo.svg';
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'gatsby';

function NavDesktop() {
    return (
        <NavContent as="nav">
            {window && window.location.pathname === '/' ? (
                <SLink className="logo" smooth to="home" offset={-100}>
                    <img src={logo} alt="Rohit Bakoliya" />
                </SLink>
            ) : (
                <Link className="logo" to="/">
                    <img src={logo} alt="Rohit Bakoliya" />
                </Link>
            )}
            <NavItems>
                <NavLinks />
                <NavItem>
                    <ToggleSwitch />
                </NavItem>
            </NavItems>
        </NavContent>
    );
}

export default NavDesktop;
