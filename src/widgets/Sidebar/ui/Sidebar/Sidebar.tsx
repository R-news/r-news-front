import Link from 'next/link';

import { Locale } from '@/shared/config/i18n/i18n';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    lang: Locale;
}

export const Sidebar = ({ lang }: SidebarProps) => {
    return (
        <VStack as="aside" gap="16" className={cls.Sidebar}>
            <Link href={`/${lang}`} className="mr-5">
                Next.js
            </Link>
            <Link href={`/${lang}/profile`}>Profile</Link>
            <Link href={`/${lang}/myFeed`}>My Feed</Link>
            <Link href={`/${lang}/bookmarks`}>Bookmarks</Link>
            <Link href={`/${lang}/bookmarks`}>Subscriptions</Link>
        </VStack>
    );
};
