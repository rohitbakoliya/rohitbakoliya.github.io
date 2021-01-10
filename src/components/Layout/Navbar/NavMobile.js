import React, { useState } from 'react';
import ToggleSwitch from '../Theme/ToggleSwitch';
import Burger from './Burger';
import { NavItem, NavItems } from './Navbar.style';
import NavLinks from './NavLinks';
import { NavMobileWrapper, MenuButton } from './NavMobile.style';

const NavMobile = () => {
    const [isMenuOpen, setMenu] = useState(false);
    return (
        <NavMobileWrapper className={`mobile-menu__container ${isMenuOpen ? 'active' : ''}`}>
            <MenuButton onClick={() => setMenu(!isMenuOpen)} className={`menu__button ${isMenuOpen ? 'active' : ''}`}>
                <Burger open={isMenuOpen} />
            </MenuButton>
            <div className="nav">
                <div className="nav__content">
                    <NavItems className="nav__list">
                        <NavLinks />
                        <NavItem>
                            <ToggleSwitch />
                        </NavItem>
                    </NavItems>
                </div>
            </div>
        </NavMobileWrapper>
    );
};
export default NavMobile;
