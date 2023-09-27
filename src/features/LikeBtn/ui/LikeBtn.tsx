import Like from '@/shared/assets/icons/like-svgrepo-com.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './LikeBtn.module.scss';

interface LikeBtnProps {
    isLiked?: boolean;
    classname?: string;
    text?: string;
    onLikeClick: () => void;
    onDislikeClick: () => void;
}

export const LikeBtn = (props: LikeBtnProps) => {
    const { classname, text, isLiked, onLikeClick, onDislikeClick } = props;

    return (
        <HStack align={'center'} gap="4">
            <Icon
                width={25}
                height={25}
                clickable
                onClick={isLiked ? onDislikeClick : onLikeClick}
                classnameClickable={classNames(
                    cls.icon,
                    { [cls.liked]: isLiked },
                    [classname],
                )}
                Svg={Like}
            />
            <span>{text && text}</span>
        </HStack>
    );
};
