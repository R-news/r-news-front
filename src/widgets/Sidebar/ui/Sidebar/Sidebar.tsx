import { getDictionary } from '@/shared/config/i18n/dictionary';
import { Locale } from '@/shared/config/i18n/i18n';
import { VStack } from '@/shared/ui/Stack';

import { getsidebarItems } from '../../model/data';
import { SidebarItems } from '../SidebarItems/SidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    lang: Locale;
}

export const Sidebar = async ({ lang }: SidebarProps) => {
    const { sidebar } = await getDictionary(lang);

    const sideBarItems =  getsidebarItems(lang, sidebar);

    const itemList = sideBarItems.map(({path, text}) => (
        <SidebarItems key={path} href={path} text={text}/>
    ))

    return (
        <VStack as="aside" className={cls.Sidebar}>
            <nav>
            <VStack gap='16'>
               {itemList} 
            </VStack>
            </nav>
            {/* <AppLink href={`/${lang}`}>
                Next.js
            </AppLink>
            <AppLink href={`/${lang}/profile`}>Profile</AppLink>
            <AppLink href={`/${lang}/myFeed`}>My Feed</AppLink>
            <AppLink href={`/${lang}/bookmarks`}>Bookmarks</AppLink>
            <AppLink href={`/${lang}/bookmarks`}>Subscriptions</AppLink> */}
        </VStack>
    );
};
