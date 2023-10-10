import { dehydrate } from '@tanstack/react-query';

import { getHomeArticles, useGetHomeArticles } from '@/entities/Article';
import { ArticlesListWithButtons } from '@/PagesComposition/Home';
import { $api, getQueryClient } from '@/shared/api/config';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import Hydrate from '@/shared/lib/components/Hydrate';
import { PageParams } from '@/shared/types/pageParams';

interface HomePageProps {
    params: PageParams;
}

export default async function Home({ params }: HomePageProps) {
    const { lang } = params;
    const { shared } = await getDictionary(lang);
    const client = getQueryClient();
    await client.prefetchQuery(['homeArticles'], getHomeArticles);
    const dehydratedState = dehydrate(client, {
        shouldDehydrateQuery: () => true,
    });

    return (
        <>
            <Hydrate state={dehydratedState}>
                <ArticlesListWithButtons langData={shared} />
            </Hydrate>
        </>
    );
}

// import Link from 'next/link';
// import { getServerSession } from 'next-auth/next';

// import { ProfileCard } from '@/entities/Profile';
// import { authConfig } from '@/shared/config/auth/auth';
// import { getDictionary } from '@/shared/config/i18n/dictionary';
// import { Locale } from '@/shared/config/i18n/i18n';

// interface ProfileProps {
//     params: {
//         lang: Locale;
//         user: string;
//     };
// }
// export default async function Profile({ params }: ProfileProps) {
//     const { profile } = await getDictionary(params.lang);
//     const resp = await fetch(`${__API__}api/profile/${params.user}`);

//     const data = await resp.json();
//     return (
//         <>
//             <ProfileCard user={data.userData} langData={profile} />
//         </>
//     );
// }
