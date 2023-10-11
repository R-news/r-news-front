import Cross from '@/shared/assets/icons/cross.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Icon } from '@/shared/ui/Icon';

import cls from './DeleteButton.module.scss';

interface LikeBtnProps {
    classname?: string;
    onClick: () => void;
}

export const DeleteButton = (props: LikeBtnProps) => {
    const { classname, onClick } = props;

    return (
        <Icon
            width={20}
            height={20}
            clickable
            defaultColor
            onClick={onClick}
            classnameClickable={classNames(cls.icon, {}, [classname])}
            Svg={Cross}
        />
    );
};
