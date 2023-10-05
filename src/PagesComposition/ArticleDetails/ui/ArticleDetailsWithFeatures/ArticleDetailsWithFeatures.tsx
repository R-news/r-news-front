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
                onLikeClick={() => onLikeClick('2')}
                onCommentClick={onCommentClick}
                onBookmarkClick={() => onBookmarkClick('2')}
                isUserBookmark={userBookmarks?.includes('2')}
                isLiked={userLikes?.includes('2')}
                commentsValue={32}
            />
        </Card>
    );
};
