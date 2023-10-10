'use client';
import {
    Article,
    ArticleDetails,
    useArticlesButtons,
} from '@/entities/Article';
import { Card } from '@/shared/ui/Card';
import { ArticleButtons } from '@/widgets/ArticleButtons';

interface ArticleDetailsWithFeaturesProps {
    article: Article;
}
export const ArticleDetailsWithFeatures = ({
    article,
}: ArticleDetailsWithFeaturesProps) => {
    const {
        onLikeClick,
        onCommentClick,
        onBookmarkClick,
        userLikes,
        userBookmarks,
    } = useArticlesButtons();
    return (
        <Card padding="16">
            <ArticleDetails article={article} />
            <ArticleButtons
                likesValue={3}
                onLikeClick={() => onLikeClick(article._id)}
                onCommentClick={onCommentClick}
                onBookmarkClick={() => onBookmarkClick(article._id)}
                isUserBookmark={userBookmarks?.includes(article._id)}
                isLiked={userLikes?.includes(article._id)}
                commentsValue={article?.comments?.length}
            />
        </Card>
    );
};
