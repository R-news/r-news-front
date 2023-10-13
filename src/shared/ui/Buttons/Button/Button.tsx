import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import { Loader } from '../../Loader';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Button variant. Responsible for visual aspects (bordered, no styles, opposite theme color of the application, etc.)
     */
    variant?: ButtonVariant;
    /**
     * A flag that makes the button square.
     */
    square?: boolean;
    /**
     * Button size according to the design system.
     */
    size?: ButtonSize;
    /**
     * A flag that controls the button's functionality.
     */
    disabled?: boolean;
    /**
     * Button content.
     */
    children?: ReactNode;
    /**
     * Expands the button to full width.
     */
    fullWidth?: boolean;

    color?: ButtonColor;

    isLoading?: boolean;

    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            square,
            disabled,
            fullWidth,
            size = 'm',
            addonLeft,
            addonRight,
            isLoading,
            color = 'normal',
            ...otherProps
        } = props;

        const mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
        };

        return (
            <button
                type="button"
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[size],
                    cls[color],
                ])}
                disabled={disabled}
                {...otherProps}
                ref={ref}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {isLoading ? <Loader /> : children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
