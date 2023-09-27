import BookMarkIcon from '@/shared/assets/icons/bookmark.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './BookmarksButton.module.scss';

interface AddBookmarksButtonProps {
    classname?: string;
    onAddBookmarkClick: () => void;
    isUserBookmark?: boolean;
    value?: string;
}

export const BookmarksButton = (props: AddBookmarksButtonProps) => {
    const { classname, value, onAddBookmarkClick, isUserBookmark } = props;
    return (
        <Icon
            clickable
            isHover
            onClick={onAddBookmarkClick}
            classnameClickable={classNames(
                cls.icon,
                { [cls.userBookmark]: isUserBookmark },
                [classname],
            )}
            Svg={BookMarkIcon}
        />
    );
};
