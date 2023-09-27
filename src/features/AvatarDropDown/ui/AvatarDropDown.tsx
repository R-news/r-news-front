'use client';
import { signOut } from 'next-auth/react';

import { Locale } from '@/shared/config/i18n/i18n';
import { getRouteProfile } from '@/shared/const/route';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown } from '@/shared/ui/Popups';

interface AvatarDropDownProps {
    lang: Locale;
    langData: any;
    classname?: string;
    session: any;
}

export const AvatarDropDown = (props: AvatarDropDownProps) => {
    const { classname, langData, lang, session } = props;

    const items = [
        {
            content: langData.Profile,
            href: getRouteProfile(lang, '1'),
        },
        {
            content: langData.Logout,
            onClick: () => signOut({ callbackUrl: '/' }),
        },
    ];

    if (!session.user) {
        return (
            <>
                <AppLink href={'/en/auth'}>Auth</AppLink>
            </>
        );
    }

    return (
        <DropDown items={items} trigger={<Avatar />} direction="bottom left" />
    );
};
