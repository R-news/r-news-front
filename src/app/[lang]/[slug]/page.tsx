import { Locale } from '@/shared/config/i18n/i18n';
import { classNames } from '@/shared/lib/helpers/classNames';

interface ArticleDetailsProps {
    classname?: string;
    params: {
        lang: Locale;
        slug: string;
    };
}

const ArticleDetails = (props: ArticleDetailsProps) => {
    return <div>{props.params.slug} page id</div>;
};

export default ArticleDetails;
