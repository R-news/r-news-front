import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import UserIcon from '../../assets/icons/user-avatar.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string | StaticImport;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className,
    src,
    size = 50,
    alt = 'avatar',
}: AvatarProps) => {
    const mods = {};

    const fallback = <Skeleton width={size} height={size} border="50%" />; //TODO IMAGE LOADER
    const errorFallback = (
        <Icon defaultColor width={size} height={size} Svg={UserIcon} />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            //@ts-ignore exception
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
