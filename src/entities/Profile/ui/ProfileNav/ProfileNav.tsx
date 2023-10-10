import { getServerSession } from 'next-auth';

import { authConfig } from '@/shared/config/auth/auth';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Tabs } from '@/shared/ui/Tabs';

import { getProfileNavItems } from '../../model/profileNavItems';
import { ProfileNavItem } from '../ProfileNavItem/ProfileNavItem';
import cls from './ProfileNav.module.scss';

interface ProifleNavProps {
    classname?: string;
    activePath?: string;
    langData?: string;
}

export const ProfileNav = async (props: ProifleNavProps) => {
    const session = await getServerSession(authConfig);
    const { classname, activePath, langData } = props;

    const navItems = getProfileNavItems(
        activePath!,
        langData,
        session?.user?.role,
    );

    const itemList = navItems.map(({ path, text }) => (
        <ProfileNavItem key={path} href={path} text={text} />
    ));
    return (
        <HStack className={classNames(cls.ProifileNav, {}, [classname])}>
            <nav>
                <HStack gap="16" as={'ul'}>
                    <Tabs items={navItems} />
                </HStack>
            </nav>
        </HStack>
    );
};
