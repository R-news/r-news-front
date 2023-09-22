import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import logo from '../../assets/icons/bookmark.svg';
import { AppLink } from '../AppLink';
import { Icon } from '../Icon';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    classname?: string;
    size?: number;
    lang?: string;
}

export const AppLogo = memo(({ classname, size = 40, lang }: AppLogoProps) => {
    return (
        <AppLink href={`/${lang}`}>
            <HStack
                gap="8"
                className={classNames(cls.AppLogo, {}, [classname])}
            >
                <Icon
                    height={size}
                    width={size}
                    Svg={logo}
                    classname={cls.icon}
                />
                NEWS
            </HStack>
        </AppLink>
    );
});
