'use client';

import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

import Settings from '@/shared/assets/icons/settings.svg';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon';

import cls from './SettingsLink.module.scss';

export const SettingsLink = () => {
    const pathname = usePathname();
    const activeSegment = useSelectedLayoutSegment();
    const hrefArray = pathname.split('/');
    hrefArray.length === 5 ? hrefArray.splice(4, 1) : hrefArray;
    const link = hrefArray.join('/');

    const isActive = activeSegment === 'settings';

    return (
        <AppLink
            href={`${link}/settings`}
            classname={cls.settingsLink}
            isActive={isActive}
        >
            <Icon
                clickable
                isHover={!isActive}
                Svg={Settings}
                classnameClickable={cls.icon}
            />
        </AppLink>
    );
};
