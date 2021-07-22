import React from 'react';
import { Visible } from 'react-grid-system';

import { NavWrapper } from './Navbar.style';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Navbar() {
    return (
        <>
            <NavWrapper>
                <Visible md lg xl>
                    <NavDesktop />
                </Visible>
            </NavWrapper>
            <Visible xs sm>
                <NavMobile />
            </Visible>
        </>
    );
}

export default Navbar;
