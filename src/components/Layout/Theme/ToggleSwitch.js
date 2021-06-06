import React, { useContext } from 'react';
import ToggleSwitchWrapper from './ToggleSwitch.style';
import ThemeContext from './ThemeContext';

const ToggleSwitch = ({ isMenuOpen }) => {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return (
        <ToggleSwitchWrapper>
            <div className="label switch">
                <input
                    disabled={isMenuOpen ? false : true}
                    type="checkbox"
                    aria-label="toggle theme"
                    className="checkbox"
                    onChange={toggleTheme}
                    checked={theme === 'dark' ? true : false}
                    id="theme-switch"
                />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
        </ToggleSwitchWrapper>
    );
};

export default ToggleSwitch;
