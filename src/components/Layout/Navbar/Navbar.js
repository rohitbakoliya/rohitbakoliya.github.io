import React from 'react';
import { Visible } from 'react-grid-system';

import { NavWrapper } from './Navbar.style';
import NavDesktop from './NavDesktop';

function Navbar() {
    return (
        <NavWrapper>
            <Visible md lg xl>
                <NavDesktop />
            </Visible>
        </NavWrapper>
    );
}

export default Navbar;
