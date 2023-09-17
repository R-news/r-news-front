'use client';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext/ThemeContext';
import { useLocalStorage } from '@/shared/lib/hooks/useLocalStorage/useLocalStorage';

interface ThemeProviderProps {
    initialValue?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialValue, children } = props;

    const [initialTheme] = useState<Theme>(
        JSON.parse(localStorage.getItem('theme')) || Theme.LIGHT,
    );

    const [theme, setTheme] = useLocalStorage<Theme>(
        'theme',
        initialValue || initialTheme,
    );

    useEffect(() => {
        document.body.classList.add(theme);
        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [setTheme, theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
