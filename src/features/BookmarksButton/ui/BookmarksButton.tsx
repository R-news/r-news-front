import BookMarkIcon from '@/shared/assets/icons/bookmark.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Icon } from '@/shared/ui/Icon';

import cls from './BookmarksButton.module.scss';

interface AddBookmarksButtonProps {
    onClick: () => void;
    classname?: string;
    isUserBookmark?: boolean;
}

export const BookmarksButton = (props: AddBookmarksButtonProps) => {
    const { classname, onClick, isUserBookmark } = props;
    return (
        <Icon
            clickable
            isHover
            onClick={onClick}
            classnameClickable={classNames(
                cls.icon,
                { [cls.userBookmark]: isUserBookmark },
                [classname],
            )}
            Svg={BookMarkIcon}
        />
    );
};
