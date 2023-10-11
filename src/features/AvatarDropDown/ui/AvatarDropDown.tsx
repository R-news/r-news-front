'use client';

import { useGetUserData } from '@/entities/User';
import type { langType } from '@/shared/config/i18n/dictionary';
import type { Locale } from '@/shared/config/i18n/i18n';
import { getRouteProfile } from '@/shared/const/route';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { DropDown } from '@/shared/ui/Popups';

import { useAuth } from '../model/hooks/useAuth';
import { AuthModal } from './AuthModal';

interface AvatarDropDownProps {
    lang: Locale;
    langData: langType['navbar'];
    session: any;
}

export const AvatarDropDown = (props: AvatarDropDownProps) => {
    const { langData, lang, session } = props;

    const { onLogout, isOpen, setIsOpen } = useAuth();
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
                <Button onClick={() => setIsOpen((prev) => !prev)}>
                    {langData.Login}
                </Button>
                {isOpen && (
                    <AuthModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen((prev) => !prev)}
                    />
                )}
            </>
        );
    }

    return (
        <DropDown
            withArrow
            items={items}
            trigger={<Avatar src={user?.userData.avatar} />}
            direction="bottom left"
        />
    );
};
