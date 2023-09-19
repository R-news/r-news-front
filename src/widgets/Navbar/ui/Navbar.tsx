import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import { Locale } from '@/shared/config/i18n/i18n';
import { AppLogo } from '@/shared/ui/AppLogo/AppLogo';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';

import cls from './Navbar.module.scss';
interface NavbarProps {
    themeCookie: string;
    lang: Locale;
}
export const Navbar = async ({ themeCookie, lang }: NavbarProps) => {
    const { navbar } = await getDictionary(lang);
    return (
        <HStack as="header" className={cls.Navbar} justify="between">
            <AppLogo />
            <HStack gap={'16'}>
                <ThemeSwitcher themeCookie={themeCookie} lang={lang} />
                <LangSwitcher lang={navbar.Language} />
            </HStack>
        </HStack>
    );
};
