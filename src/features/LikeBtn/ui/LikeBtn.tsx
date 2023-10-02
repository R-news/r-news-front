import Like from '@/shared/assets/icons/like.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './LikeBtn.module.scss';

interface LikeBtnProps {
    isLiked?: boolean;
    classname?: string;
    value?: number;
    onLikeClick: () => void;
}

export const LikeBtn = (props: LikeBtnProps) => {
    const { classname, value, isLiked, onLikeClick } = props;

    return (
        <HStack align={'center'} gap="4" className={cls.container}>
            <Icon
                width={25}
                height={25}
                clickable
                onClick={onLikeClick}
                classnameClickable={classNames(
                    cls.icon,
                    { [cls.isLiked]: isLiked },
                    [classname],
                )}
                Svg={Like}
            />
            <span className={cls.span}>{value && value}</span>
        </HStack>
    );
};
