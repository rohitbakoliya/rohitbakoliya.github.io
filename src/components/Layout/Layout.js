import React from 'react';
import PropTypes from 'prop-types';

import { setConfiguration } from 'react-grid-system';

import { ThemeProvider } from 'styled-components';
import ThemeContext from './Theme/ThemeContext';
import useTheme from '../../hooks/useTheme';
import { themelight, themedark } from './Theme/Theme';

import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import GlobalStyles from '../../styles/GlobalStyles';
import { RootWrapper } from './Layout.style';
import '../common/fontLib';

setConfiguration({ breakpoints: [480, 768, 1000, 1200] });

const Layout = ({ children }) => {
    const [theme, toggleTheme] = useTheme();
    return (
        <ThemeProvider theme={theme === 'light' ? themelight : themedark}>
            <GlobalStyles />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Navbar />
            </ThemeContext.Provider>

            <RootWrapper>{children}</RootWrapper>
            <Footer />
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
