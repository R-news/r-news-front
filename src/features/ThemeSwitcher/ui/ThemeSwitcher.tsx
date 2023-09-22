'use client';

import { MouseEventHandler, useEffect, useState } from 'react';

import Moon from '@/shared/assets/icons/moon.svg';
import Sun from '@/shared/assets/icons/sun.svg';
import { Theme, themes } from '@/shared/const/theme';
import { Icon } from '@/shared/ui/Icon';
import { Switch } from '@/shared/ui/Switch';

const isTheme = (value: unknown): value is Theme =>
    themes.includes(value as Theme);

const deriveNextTheme = (currentTheme: string) => {
    switch (currentTheme) {
        case 'app_light_theme':
            return 'app_dark_theme';
        case 'app_dark_theme':
            return 'app_light_theme';
        case 'auto':
        default:
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'app_light_theme'
                : 'app_dark_theme';
    }
};

interface ThemeSwitcherProps {
    themeCookie: string;
}

export const ThemeSwitcher = ({ themeCookie }: ThemeSwitcherProps) => {
    const [theme, setTheme] = useState<Theme>(
        isTheme(themeCookie) ? themeCookie : 'auto',
    );

    useEffect(() => {
        document.body.classList.add(theme);
        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    const nextTheme = deriveNextTheme(theme);

    const onClick: MouseEventHandler<HTMLButtonElement> = async () => {
        setTheme(nextTheme);

        await fetch(`${__API__}ua/api/theme`, {
            method: 'POST',
            body: JSON.stringify({ theme: nextTheme }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
    };

    return (
        <Switch
            isChecked={theme !== 'app_light_theme'}
            onChange={onClick}
            addonLeft={<Icon Svg={Moon} width={25} height={25} />}
            addonRight={<Icon Svg={Sun} width={25} height={25} />}
        />
    );
};
