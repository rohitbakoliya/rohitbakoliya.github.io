import { useState, useEffect, useCallback } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        const prefTheme = getPrefTheme();
        if (localTheme) {
            setTheme(localTheme);
        } else if (prefTheme) {
            setTheme(prefTheme);
        }
    }, []);
    const getPrefTheme = () => {
        if (!window.matchMedia) return;
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        return 'light';
    };
    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }, [theme]);

    return [theme, toggleTheme];
};

export default useTheme;
