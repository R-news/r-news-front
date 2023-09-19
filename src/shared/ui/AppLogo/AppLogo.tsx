import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
    classname?: string;
    size?: number;
}

export const AppLogo = memo(({ classname, size = 50 }: AppLogoProps) => {
    return <div className={classNames(cls.AppLogo, {}, [classname])}>Logo</div>;
});
