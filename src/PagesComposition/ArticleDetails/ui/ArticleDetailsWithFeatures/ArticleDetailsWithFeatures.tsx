import { Article, ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/Card';
import { ArticleButtons } from '@/widgets/ArticleButtons';

interface ArticleDetailsWithFeaturesProps {
    article: Article;
    revalidate: any;
}
export const ArticleDetailsWithFeatures = async ({
    article,
    revalidate,
}: ArticleDetailsWithFeaturesProps) => {
    return (
        <Card padding="16">
            <ArticleDetails article={article} />
            <ArticleButtons
                revalidate={revalidate}
                likesValue={article.likes.length}
                id={article._id}
                commentsValue={article?.comments?.length}
            />
        </Card>
    );
};
