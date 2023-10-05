import { ArticleDetailsWithFeatures } from '@/PagesComposition/ArticleDetails';
import { $api } from '@/shared/api/config';
import { Locale } from '@/shared/config/i18n/i18n';

interface ArticleDetailsProps {
    classname?: string;
    params: {
        lang: Locale;
        slug: string;
    };
}

const ArticleDetails = async (props: ArticleDetailsProps) => {
    const resp = await fetch(`${__API__}api/articles/${props.params.slug}`);
    const data = await resp.json();

    return (
        <>
            <div>{props.params.slug} page id</div>
            <ArticleDetailsWithFeatures article={data.article} />
        </>
    );
};

export default ArticleDetails;
