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
