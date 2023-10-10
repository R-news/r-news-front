'use client';
import React, { ChangeEvent, forwardRef, ReactNode, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import CheckIcon from '../../assets/icons/check.svg';
import { Icon } from '../Icon';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
    label?: ReactNode;
    disabled?: boolean;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    size?: number;
    register?: (name: string, rules: object) => void;
    rules?: object;
    name?: string;
    ariaLabel?: string;
    [key: string]: any; // Allow additional props
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            label,
            disabled,
            checked,
            onChange,
            className,
            size = 20,
            register,
            rules,
            name,
            ariaLabel,
            ...props
        },
        ref,
    ) => {
        const inputClasses = `visually-hidden ${cls.checkBox}`;
        const [checkBoxId] = useState(String(Math.random()));

        const mods = {
            [cls.disabled]: disabled,
        };

        return (
            <div className={className}>
                <label htmlFor={checkBoxId} className={cls.label}>
                    <input
                        ref={ref}
                        type="checkbox"
                        id={checkBoxId}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        aria-label={ariaLabel}
                        className={inputClasses}
                        // {...(register && register(name, rules))}
                        {...props}
                    />
                    <Icon
                        Svg={CheckIcon}
                        className={classNames(cls.checkIcon, mods, [])}
                        width={30}
                        height={30}
                    />
                    {label && <span>{label}</span>}
                </label>
            </div>
        );
    },
);
