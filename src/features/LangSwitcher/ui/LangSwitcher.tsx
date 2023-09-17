'use client';
/* eslint-disable react/display-name */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
    };

    return (
        <Button onClick={toggle} variant="clear">
            {t('Language')}
        </Button>
    );
});
