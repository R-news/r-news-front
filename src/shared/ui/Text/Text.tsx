import { ElementType, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TitleBold = 'normal' | 'medium' | 'bold';
export type TextBold = 'normal' | 'medium' | 'bold';

export type TitleSize = 's' | 'm' | 'l' | 'xl';
export type TextSize = 's' | 'm' | 'l' | 'xl';

interface TextProps {
    textAs?: ElementType;
    titleAs?: ElementType;
    className?: string;
    title?: string | number;
    text?: string | number;
    variant?: TextVariant;
    align?: TextAlign;
    titleBold?: TitleBold;
    textBold?: TextBold;
    titleSize?: TitleSize;
    textSize?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        textAs: Element = 'p',
        titleAs: ElementTitle = 'h3',
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        titleSize = 'l',
        textSize = 'm',
        titleBold = 'medium',
        textBold = 'medium',
    } = props;

    const additionalClasses = [className, cls[variant], cls[align]];

    const haveTitle = title ? true : false;
    return (
        <>
            {haveTitle && (
                <ElementTitle
                    className={classNames(cls.title, {}, [
                        cls[titleBold],
                        cls[titleSize],
                        className,
                        ...additionalClasses,
                    ])}
                >
                    {title}
                </ElementTitle>
            )}
            {text && (
                <Element
                    className={classNames(
                        cls.text,
                        { [cls.haveTitle]: haveTitle },
                        [
                            cls[textBold],
                            cls[textSize],
                            className,
                            ...additionalClasses,
                        ],
                    )}
                >
                    {text}
                </Element>
            )}
        </>
    );
});
