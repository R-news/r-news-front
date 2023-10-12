'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

import { AppLink } from '@/shared/ui/AppLink';

interface SidebarItemsProps {
    classname?: string;
    href: string;
    text: string;
}

export const SidebarItems = (props: SidebarItemsProps) => {
    const { href, text } = props;
    const activeSegment = useSelectedLayoutSegment();

    const isActive = activeSegment === href.split('/')[2]?.replace('/', '');

    const isMain = activeSegment === null && href.split('/')[2] === '';
    return (
        <li>
            <AppLink href={href} isActive={isMain || isActive}>
                {text}
            </AppLink>
        </li>
    );
};
