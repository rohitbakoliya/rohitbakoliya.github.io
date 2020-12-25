import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import ThemeContext from './ThemeContext';
import useTheme from '../../hooks/useTheme';

import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import GlobalStyles from '../../styles/GlobalStyles';
import { RootWrapper } from './Layout.style';

const Layout = ({ children }) => {
    const [theme, toggleTheme] = useTheme();
    return (
        <ThemeProvider theme={{ bg: 'red' }}>
            <GlobalStyles />
            <ThemeContext.Provider value={(theme, toggleTheme)}>
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
