'use client';
import {
    ArticleItem,
    ArticleList,
    ArticleUpdate,
    useGetHomeArticles,
} from '@/entities/Article';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';
import { ArticleButtons } from '@/widgets/ArticleButtons';

import { useArticlesButtons } from '../../../../entities/Article/model/hooks/useArticlesButtons';

interface ArticlesListWithButtonsProps {
    classname?: string;
    langData?: any;
}

export const ArticlesListWithButtons = ({
    langData,
}: ArticlesListWithButtonsProps) => {
    const { data: { data } = {} } = useGetHomeArticles();

    const axiosAuth = useAxiosAuth();
    const {
        onLikeClick,
        onCommentClick,
        onBookmarkClick,
        userLikes,
        userBookmarks,
    } = useArticlesButtons();

    return (
        <ArticleList>
            <button
                onClick={async () => {
                    await axiosAuth.get(`api/user/data`);
                }}
            >
                tests
            </button>
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
