'use client';

import { classNames } from '@/shared/lib/helpers/classNames';

import Unsubscribe from '../../../assets/icons/cross.svg';
import Subscribe from '../../../assets/icons/susbscribe.svg';
import { Icon } from '../../Icon';
import { Button } from '../Button/Button';

// import cls from './SubscribeButton.module.scss';

interface SubscribeButtonProps {
    classname?: string;
    isSmall?: boolean;
    isSubscribed?: boolean;
    onClick?: () => void;
}

export const SubscribeButton = (props: SubscribeButtonProps) => {
    const { classname, isSmall, onClick, isSubscribed } = props;

    if (isSmall) {
        return (
            <Icon
                onClick={onClick}
                width={25}
                height={25}
                defaultColor
                clickable
                isHover
                Svg={isSubscribed ? Unsubscribe : Subscribe}
                className={classname}
            />
        );
    }

    return (
        <Button onClick={onClick}>
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </Button>
    );
};
