import { classNames } from '@/shared/lib/helpers/classNames';

import Unsubscribe from '../../../assets/icons/cross.svg';
import Subscribe from '../../../assets/icons/susbscribe.svg';
import { Icon } from '../../Icon';
import { Button } from '../Button/Button';

// import cls from './SubscribeButton.module.scss';

interface SubscribeButtonProps {
    classname?: string;
    isSmall?: boolean;
    onClick?: () => void;
}

export const SubscribeButton = (props: SubscribeButtonProps) => {
    const { classname, isSmall, onClick } = props;

    if (isSmall) {
        return (
            <Icon
                width={25}
                height={25}
                defaultColor
                clickable
                isHover
                Svg={Subscribe}
                className={classname}
            />
        );
    }

    return <Button onClick={onClick}>Subscribe</Button>;
};
