'use client';

import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button } from '@/shared/ui/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme}>
            {theme === Theme.LIGHT ? 'dark' : 'light'}
        </Button>
    );
};
