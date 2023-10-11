import { useContext } from 'react';

import type { langType } from '@/shared/config/i18n/dictionary';
import { HStack } from '@/shared/ui/Stack';

import { CreateArticleContext } from '../../model/context/createArticleContext';
import { TextType } from '../../model/types/enums';
import { DeleteButton } from '../DeleteButton/DeleteButton';

interface TextBlockProps {
    variant?: TextType;
    langData?: langType['createArticle'];
    id: number | string;
}

export const TextBlock = (props: TextBlockProps) => {
    const { onDeleteElement } = useContext(CreateArticleContext);
    const { variant = TextType.TEXT, langData, id } = props;

    if (variant === TextType.TITLE) {
        return <input placeholder={langData?.TITLE} />;
    }

    if (variant === TextType.SUBTITLE) {
        return (
            <HStack>
                <DeleteButton onClick={() => onDeleteElement(id)} />
                <input placeholder={langData?.SUBTITLE} />
            </HStack>
        );
    }

    return (
        <HStack gap="8">
            <DeleteButton onClick={() => onDeleteElement(id)} />
            <input placeholder={langData?.TEXT} />
        </HStack>
    );
};

export default TextBlock;
