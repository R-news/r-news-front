'use client';
import { ArticleItem, ArticleList, ArticleUpdate } from '@/entities/Article';
import { useGetBookmarks } from '@/entities/User';
import { ArticleButtons } from '@/widgets/ArticleButtons';

import { useArticlesButtons } from '../../../../entities/Article/model/hooks/useArticlesButtons';

interface ArticlesListWithButtonsProps {
    classname?: string;
    langData?: any;
}

export const ArticlesListWithButtons = ({
    langData,
}: ArticlesListWithButtonsProps) => {
    const { data: { data } = {}, isLoading } = useGetBookmarks();

    const {
        onLikeClick,
        onCommentClick,
        onBookmarkClick,
        userLikes,
        userBookmarks,
    } = useArticlesButtons();

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <ArticleList>
            {data?.articles?.map((article: ArticleUpdate) => (
                <ArticleItem
                    langData={langData}
                    key={article._id}
                    {...article}
                    ButtonsWidget={
                        <ArticleButtons
                            likesValue={article.likes.length}
                            onLikeClick={() => onLikeClick(article._id)}
                            onCommentClick={onCommentClick}
                            onBookmarkClick={() => onBookmarkClick(article._id)}
                            isUserBookmark={userBookmarks?.includes(
                                article._id,
                            )}
                            isLiked={userLikes?.includes(article._id)}
                            commentsValue={article?.comments}
                        />
                    }
                />
            ))}
        </ArticleList>
    );
};
