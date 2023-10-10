import { memo, useCallback } from 'react';

import { ListBox } from '@/shared/ui/Popups';

import { Content } from '../../model/types/content';

interface CountrySelectProps {
    className?: string;
    value?: Content;
    onChange?: (value: Content) => void;
    readonly?: boolean;
}

const options = [
    { value: Content.TITLE, content: Content.TITLE },
    { value: Content.SUBTITLE, content: Content.SUBTITLE },
    { value: Content.TEXT, content: Content.TEXT },
    { value: Content.MAIN_IMAGE, content: Content.MAIN_IMAGE },
    { value: Content.IMAGE, content: Content.IMAGE },
    { value: Content.CODE, content: Content.CODE },
    { value: Content.VIDEO, content: Content.VIDEO },
    { value: Content.ARTICLETYPE, content: Content.ARTICLETYPE },
];

export const ContentSelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Content);
            },
            [onChange],
        );

        const props = {
            className,
            value,
            defaultValue: 'Choose content',
            label: 'Choose content',
            items: options,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right' as const,
        };

        return <ListBox {...props} />;
    },
);
