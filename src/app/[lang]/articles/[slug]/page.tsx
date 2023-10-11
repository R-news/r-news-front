import { revalidatePath, revalidateTag } from 'next/cache';

import { ArticleDetailsWithFeatures } from '@/PagesComposition/ArticleDetails';
import { Locale } from '@/shared/config/i18n/i18n';

interface ArticleDetailsProps {
    params: {
        lang: Locale;
        slug: string;
    };
}

export default async function ArticleDetails(props: ArticleDetailsProps) {
    const resp = await fetch(`${__API__}api/articles/${props.params.slug}`, {
        cache: 'no-store',
        next: { tags: [props.params.slug] },
    });
    const data = await resp.json();

    async function revalidate() {
        'use server';
        revalidateTag(props.params.slug);
    }

    return (
        <>
            <ArticleDetailsWithFeatures
                article={data.article}
                revalidate={revalidate}
            />
        </>
    );
}
