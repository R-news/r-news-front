import { BookmarksButton } from '@/features/BookmarksButton';
import { CommentsButton } from '@/features/CommentsButton';
import { LikeBtn } from '@/features/LikeBtn';
import { HStack } from '@/shared/ui/Stack';

interface ArticleButtonsProps {
    classname?: string;
    isLiked?: boolean;
    isUserBookmark?: boolean;
    likesValue: number;
    commentsValue?: number;
    onLikeClick: () => void;
    onDislikeClick: () => void;
    onBookmarkClick: () => void;
    onCommentClick: () => void;
}

export const ArticleButtons = (props: ArticleButtonsProps) => {
    const {
        classname,
        likesValue,
        commentsValue,
        onLikeClick,
        onDislikeClick,
        isLiked,
        isUserBookmark,
        onBookmarkClick,
        onCommentClick,
    } = props;
    return (
        <HStack gap="4" className={classname}>
            <LikeBtn
                value={likesValue}
                onLikeClick={onLikeClick}
                onDislikeClick={onDislikeClick}
                isLiked={isLiked}
            />
            <CommentsButton
                onClick={onCommentClick}
                clickable={true}
                value={commentsValue}
            />
            <BookmarksButton
                onClick={onBookmarkClick}
                isUserBookmark={isUserBookmark}
            />
        </HStack>
    );
};
