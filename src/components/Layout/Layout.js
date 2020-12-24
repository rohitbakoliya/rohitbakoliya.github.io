import React from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './ThemeContext';
import useTheme from '../../hooks/useTheme';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import GlobalStyles from '../../styles/GlobalStyles';

const Layout = ({ children }) => {
    const [theme, toggleTheme] = useTheme();
    return (
        <ThemeProvider theme={{ bg: 'red' }}>
            <GlobalStyles />
            <ThemeContext.Provider value={(theme, toggleTheme)}>
                <Navbar />
            </ThemeContext.Provider>
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
