import { ArticleDetailsWithFeatures } from '@/PagesComposition/ArticleDetails';
import { Locale } from '@/shared/config/i18n/i18n';

interface ArticleDetailsProps {
    classname?: string;
    params: {
        lang: Locale;
        slug: string;
    };
}

export default async function ArticleDetails(props: ArticleDetailsProps) {
    const resp = await fetch(`${__API__}api/articles/${props.params.slug}`);
    const data = await resp.json();

    return (
        <>
            <div>{props.params.slug} page id</div>
            <ArticleDetailsWithFeatures article={data.article} />
        </>
    );
}
