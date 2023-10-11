'use client';

import { useArticlesButtons } from '@/entities/Article';
import { BookmarksButton } from '@/features/BookmarksButton';
import { CommentsButton } from '@/features/CommentsButton';
import { LikeBtn } from '@/features/LikeBtn';
import { HStack } from '@/shared/ui/Stack';

interface ArticleButtonsProps {
    classname?: string;
    likesValue: number;
    commentsValue?: number;
    id: string;
    revalidate?: any;
}

export const ArticleButtons = (props: ArticleButtonsProps) => {
    const { classname, likesValue, commentsValue, id, revalidate } = props;
    const {
        onLikeClick,
        onCommentClick,
        onBookmarkClick,
        userLikes,
        userBookmarks,
    } = useArticlesButtons(revalidate);

    const isUserBookmark = userBookmarks?.includes(id);
    const isLiked = userLikes?.includes(id);

    const like = (id: string) => {
        onLikeClick(id);
        // revalidate();
    };

    return (
        <HStack gap="4" className={classname}>
            <LikeBtn
                value={likesValue}
                onLikeClick={() => like(id)}
                isLiked={isLiked}
            />
            <CommentsButton
                onClick={onCommentClick}
                clickable={true}
                value={commentsValue}
            />
            <BookmarksButton
                onClick={() => onBookmarkClick(id)}
                isUserBookmark={isUserBookmark}
            />
        </HStack>
    );
};
