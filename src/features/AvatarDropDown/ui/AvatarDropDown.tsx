'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

import { Locale } from '@/shared/config/i18n/i18n';
import { getRouteProfile } from '@/shared/const/route';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { DropDown } from '@/shared/ui/Popups';

import { AuthModal } from './AuthModal';

interface AvatarDropDownProps {
    lang: Locale;
    langData: any;
    classname?: string;
    session: any;
}

export const AvatarDropDown = (props: AvatarDropDownProps) => {
    const router = useRouter();
    const { classname, langData, lang, session } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onLogout = () => {
        signOut({ redirect: false });
        router.refresh();
    };
    const items = [
        {
            content: langData.Profile,
            href: getRouteProfile(lang, '1'),
        },
        {
            content: langData.Logout,
            onClick: () => onLogout,
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
        <DropDown items={items} trigger={<Avatar />} direction="bottom left" />
    );
};
