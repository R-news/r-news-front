import { getServerSession } from 'next-auth/next';

import { authConfig } from '@/shared/config/auth/auth';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import { Locale } from '@/shared/config/i18n/i18n';
import { VStack } from '@/shared/ui/Stack';

import { SidebarList } from '../SidebarList/SidebarList';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    lang: Locale;
}

export const Sidebar = async ({ lang }: SidebarProps) => {
    const session = await getServerSession(authConfig);
    const { sidebar } = await getDictionary(lang);

    return (
        <VStack as="aside" className={cls.Sidebar}>
            <nav>
                <SidebarList langData={sidebar} lang={lang} session={session} />
            </nav>
        </VStack>
    );
};
