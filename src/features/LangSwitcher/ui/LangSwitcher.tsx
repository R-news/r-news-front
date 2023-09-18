'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LangSwitcherProps {
    lang: string;
}

export const LangSwitcher = ({ lang }: LangSwitcherProps) => {
    const pathName = usePathname();
    const onClick = () => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = segments[1] === 'en' ? 'ua' : 'en';
        return segments.join('/');
    };

    return <Link href={onClick()}>{lang}</Link>;
};
