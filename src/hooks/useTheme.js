import { useEffect, useState, useCallback } from 'react';

const useTheme = () => {
    let [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }, [theme]);

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);

    return [theme, toggleTheme];
};

export default useTheme;
