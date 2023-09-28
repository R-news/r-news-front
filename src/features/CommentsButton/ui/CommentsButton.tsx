import CommentIcon from '@/shared/assets/icons/comment.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './CommentsButton.module.scss';

interface CommentsButtonProps {
    onClick: () => void;
    classname?: string;
    clickable?: boolean;
    value?: number;
}

export const CommentsButton = (props: CommentsButtonProps) => {
    const { classname, onClick, clickable, value } = props;
    return (
        <HStack align={'center'} gap="4" className={cls.container}>
            <Icon
                clickable={clickable}
                isHover
                onClick={onClick}
                classnameClickable={classNames(cls.icon, {}, [classname])}
                Svg={CommentIcon}
            />
            <span className={cls.span}>{value && value}</span>
        </HStack>
    );
};
