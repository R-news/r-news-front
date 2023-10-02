import { useCallback } from 'react';

import {
    useGetUserData,
    useMutationAddBookmark,
    useMutationArtilcleLike,
} from '@/entities/User';

export const useArticlesButtons = () => {
    const { likeArticle } = useMutationArtilcleLike();
    const { addBookmark } = useMutationAddBookmark();
    const { data: { data: user } = {} } = useGetUserData();
    const userLikes = user?.userData?.likes;
    const userBookmarks = user?.userData?.bookmarks;

    const onLikeClick = useCallback(
        (articleId: string) => likeArticle(articleId),
        [likeArticle],
    );

    const onBookmarkClick = useCallback(
        (articleId: string) => addBookmark(articleId),
        [addBookmark],
    );

    const onCommentClick = () => console.log(1);
    return {
        onLikeClick,
        onCommentClick,
        onBookmarkClick,
        userLikes,
        userBookmarks,
    };
};
