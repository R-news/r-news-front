'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

import { AppLink } from '@/shared/ui/AppLink';

interface SidebarItemsProps {
    href: string;
    text: string;
}

export const ProfileNavItem = (props: SidebarItemsProps) => {
    const { href, text } = props;
    const hrefArray = href.split('/');
    hrefArray.length === 6 ? hrefArray.splice(4, 1) : hrefArray;
    const activeSegment = useSelectedLayoutSegment();
    const link = hrefArray.join('/');

    const isActive = activeSegment === hrefArray[4]?.replace('/', '');
    return (
        <li>
            <AppLink href={link} isActive={isActive}>
                {text}
            </AppLink>
        </li>
    );
};
