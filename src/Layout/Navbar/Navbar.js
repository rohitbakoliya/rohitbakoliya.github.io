import React, { useContext } from 'react';
import { Visible } from 'react-grid-system';
import ThemeContext from '../../Theme/ThemeContext';

import { NavWrapper } from './Navbar.style';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Navbar() {
    const { theme } = useContext(ThemeContext);
    console.log({ from: 'Navbar', theme });
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
