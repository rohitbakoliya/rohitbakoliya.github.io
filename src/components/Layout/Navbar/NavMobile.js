import React, { useState } from 'react';
import ToggleSwitch from '../Theme/ToggleSwitch';
import Burger from './Burger';
import { NavItem, NavItems } from './Navbar.style';
import NavLinks from './NavLinks';
import { NavMobileWrapper, MenuButton } from './NavMobile.style';

const NavMobile = () => {
    const [isMenuOpen, setMenu] = useState(false);

    const handleCloseMenu = () => {
        setMenu(!isMenuOpen);
    };
    return (
        <NavMobileWrapper className={`${isMenuOpen ? 'active' : ''}`}>
            <MenuButton
                aria-label="menu"
                onClick={() => setMenu(!isMenuOpen)}
                className={`${isMenuOpen ? 'active' : ''}`}
            >
                <Burger open={isMenuOpen} />
            </MenuButton>
            {console.log(isMenuOpen)}
            <div className="nav">
                <div className="nav__content">
                    <NavItems className="nav__list">
                        <NavLinks closeMenuInMob={handleCloseMenu} />
                        <NavItem onClick={handleCloseMenu}>
                            <ToggleSwitch isMenuOpen={isMenuOpen} />
                        </NavItem>
                    </NavItems>
                </div>
            </div>
        </NavMobileWrapper>
    );
};
export default NavMobile;
