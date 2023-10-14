import { revalidateTag } from 'next/cache';

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
    const resp = await fetch(`${__API__}api/profile/${params.user}`, {
        cache: 'no-store',
        next: { tags: [params.user] },
    });
    const data = await resp.json();

    async function revalidate() {
        'use server';
        revalidateTag(params.user);
    }

    return (
        <section>
            <ProfileCard
                user={data.userData}
                langData={profile}
                revalidate={revalidate}
            />
            {children}
        </section>
    );
}
