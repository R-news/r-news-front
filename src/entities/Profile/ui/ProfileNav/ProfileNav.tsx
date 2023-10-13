'use client';
import { usePathname } from 'next/navigation';

import type { langType } from '@/shared/config/i18n/dictionary';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Tabs } from '@/shared/ui/Tabs';

import { getProfileNavItems } from '../../model/profileNavItems';
import { ProfileNavItem } from '../ProfileNavItem/ProfileNavItem';
import cls from './ProfileNav.module.scss';

interface ProifleNavProps {
    classname?: string;
    langData?: langType['profile'];
    role: string;
}

export const ProfileNav = (props: ProifleNavProps) => {
    const { classname, langData, role } = props;
    const pathname = usePathname();
    const navItems = getProfileNavItems(pathname, langData, role);

    const itemList = navItems.map(({ path, text }) => (
        <ProfileNavItem key={path} href={path} text={text} />
    ));
    return (
        <HStack className={classNames(cls.ProifileNav, {}, [classname])}>
            <nav>
                <HStack gap="16" as={'ul'}>
                    {itemList}
                </HStack>
            </nav>
        </HStack>
    );
};
