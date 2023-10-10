import { ProfileCard } from '@/entities/Profile';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import { Locale } from '@/shared/config/i18n/i18n';

interface ProfileProps {
    children: React.ReactNode;
    params: {
        lang: Locale;
        user: string;
    };
}

export default async function ProfileLayout({
    params,
    children,
}: ProfileProps) {
    const { profile } = await getDictionary(params.lang);
    const resp = await fetch(`${__API__}api/profile/${params.user}`);

    const data = await resp.json();
    return (
        <section>
            <ProfileCard user={data.userData} langData={profile} />
            {children}
        </section>
    );
}
