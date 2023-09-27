'use client';

import { Locale } from '@/shared/config/i18n/i18n';
import { VStack } from '@/shared/ui/Stack';

import { getsidebarItems } from '../../model/data';
import { SidebarItems } from '../SidebarItems/SidebarItems';

interface SidebarListProps {
    classname?: string;
    lang?: Locale;
    langData?: any;
    session: any;
}

export const SidebarList = ({ langData, lang, session }: SidebarListProps) => {
    //@ts-ignore TODO
    const sideBarItems = getsidebarItems(lang, langData, session?.user?.role);

    const itemList = sideBarItems.map(({ path, text }) => (
        <SidebarItems key={path} href={path} text={text} />
    ));

    return (
        <VStack gap="16" as={'ul'}>
            {itemList}
        </VStack>
    );
};
