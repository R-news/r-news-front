'use client';
import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import CopyIcon from '../../assets/icons/bookmark.svg';
import { Icon } from '../Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Icon
                clickable
                onClick={onCopy}
                className={cls.copyBtn}
                Svg={CopyIcon}
            />
            <code>{text}</code>
        </pre>
    );
});
