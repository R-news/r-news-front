import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import { Locale } from '@/shared/config/i18n/i18n';

interface NavbarProps {
    themeCookie: string;
    lang: Locale;
}
export const Navbar = async ({ themeCookie, lang }: NavbarProps) => {
    const { navbar } = await getDictionary(lang);
    return (
        <div>
            <ThemeSwitcher themeCookie={themeCookie} />
            <LangSwitcher lang={navbar.Language} />
        </div>
    );
};
