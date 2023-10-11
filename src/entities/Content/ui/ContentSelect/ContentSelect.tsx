import { memo, useCallback } from 'react';

import type { langType } from '@/shared/config/i18n/dictionary';
import { ListBox } from '@/shared/ui/Popups';

import { Content } from '../../model/types/content';

interface CountrySelectProps {
    className?: string;
    value?: Content;
    onChange?: (value: Content) => void;
    readonly?: boolean;
    langData: langType['createArticle'];
}

export const ContentSelect = memo(
    ({
        className,
        value,
        onChange,
        readonly,
        langData,
    }: CountrySelectProps) => {
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Content);
            },
            [onChange],
        );

        const options = (Object.keys(Content) as (keyof typeof Content)[]).map(
            (key) => ({
                value: Content[key],
                content: langData[key],
            }),
        );

        const props = {
            className,
            value,
            defaultValue: langData['SelectContentType'],
            items: options,
            onChange: onChangeHandler,
            readonly,
            direction: 'bottom right' as const,
        };

        return <ListBox {...props} />;
    },
);
