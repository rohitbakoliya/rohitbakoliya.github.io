import React from 'react';
import { Link as SLink } from 'react-scroll';
import { NavItem, NavItems, NavContent } from './Navbar.style';
import NavLinks from './NavLinks';
import logo from '../../../static/logo.png';
import ToggleSwitch from '../Theme/ToggleSwitch';

function NavDesktop() {
    return (
        <NavContent as="nav">
            <SLink className="logo" smooth offset={-70} hashSpy={true} to="home">
                <img src={logo} alt="Rohit Bakoliya" />
            </SLink>
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
