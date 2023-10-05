import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Card.module.scss';

type SupportedTags = 'div' | 'li' | 'article' | 'section';
// export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    fullHeight?: boolean;
    as?: SupportedTags;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card = memo((props: CardProps) => {
    const {
        as = 'div',
        className,
        children,
        // variant = 'normal',
        max,
        padding = '8',
        border = 'normal',
        fullHeight,
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];
    const Tag = as as keyof JSX.IntrinsicElements;

    return (
        //@ts-ignore
        <Tag
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                    [cls.fullHeight]: fullHeight,
                },
                [className, cls[paddingClass], cls[border]],
            )}
            {...otherProps}
        >
            {children}
        </Tag>
    );
});
