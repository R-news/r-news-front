import { classNames } from '@/shared/lib/helpers/classNames';

import { HStack } from '../Stack';
import { Text } from '../Text';
import cls from './Rating.module.scss';

interface RatingProps {
    classname?: string;
    rating?: string | number;
}

export const Rating = (props: RatingProps) => {
    const { classname, rating } = props;

    const ratingIcon = rating ? (Number(rating) > 0 ? '+' : '-') : '';

    const editedNumber = rating ? Math.abs(+rating) : '0';

    return (
        <HStack
            gap="8"
            className={classNames(
                cls.Rating,
                {
                    [cls.isGood]: ratingIcon === '+',
                    [cls.isBad]: ratingIcon === '-',
                },
                [classname],
            )}
        >
            {rating && (
                <Text
                    textAs={'span'}
                    text={ratingIcon}
                    textBold="bold"
                    textSize="l"
                />
            )}
            <Text textAs={'span'} text={editedNumber} textBold="bold" />
        </HStack>
    );
};
