'use client';

import { useAuth } from '@/entities/Auth';
import { useGetUserData } from '@/entities/User';
import type { langType } from '@/shared/config/i18n/dictionary';
import type { Locale } from '@/shared/config/i18n/i18n';
import { getRouteProfile } from '@/shared/const/route';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Buttons';
import { DropDown } from '@/shared/ui/Popups';

interface AvatarDropDownProps {
    lang: Locale;
    langData: langType['navbar'];
    session: any;
}

export const AvatarDropDown = (props: AvatarDropDownProps) => {
    const { langData, lang, session } = props;

    const { onLogout } = useAuth();
    const { data: { data: user } = {} } = useGetUserData();

    const items = [
        {
            content: langData.Profile,
            href: getRouteProfile(lang, session?.user?.id),
        },
        {
            content: langData.Logout,
            onClick: () => onLogout(),
        },
    ];

    if (!session?.user) {
        return (
            <>
                <AppLink href={'/user/auth'}>
                    <Button>{langData.Login}</Button>
                </AppLink>
            </>
        );
    }

    return (
        <DropDown
            withArrow
            items={items}
            trigger={<Avatar src={user?.userData?.avatar} />}
            direction="bottom left"
        />
    );
};
