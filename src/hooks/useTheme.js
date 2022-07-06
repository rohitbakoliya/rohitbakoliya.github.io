import { useState, useEffect, useCallback } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState((typeof window != 'undefined' && localStorage.getItem('theme')) || 'light');

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
        } else {
            const prefTheme = getPrefTheme();
            if (prefTheme) {
                setTheme(prefTheme);
                localStorage.setItem('theme', prefTheme);
            }
        }
    }, []);

    const getPrefTheme = () => {
        if (!window.matchMedia) return;
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        return 'light';
    };

    return [theme, toggleTheme];
};

export default useTheme;
