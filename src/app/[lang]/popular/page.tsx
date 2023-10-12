import { dehydrate } from '@tanstack/react-query';

import { getPopularArticles } from '@/entities/Article';
import { ArticlesListWithButtons } from '@/PagesComposition/Popular';
import { getQueryClient } from '@/shared/api/config';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import Hydrate from '@/shared/lib/components/Hydrate';
import { PageParams } from '@/shared/types/pageParams';

interface PopularProps {
    params: PageParams;
}

export default async function Popular({ params }: PopularProps) {
    const { lang } = params;
    const { shared } = await getDictionary(lang);
    const client = getQueryClient();
    await client.prefetchQuery(['popularArticles'], getPopularArticles);
    const dehydratedState = dehydrate(client, {
        shouldDehydrateQuery: () => true,
    });

    return (
        <Hydrate state={dehydratedState}>
            <ArticlesListWithButtons langData={shared} />
        </Hydrate>
    );
}
