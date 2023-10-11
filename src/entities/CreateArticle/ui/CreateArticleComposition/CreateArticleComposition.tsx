import { useContext } from 'react';

import { ContentSelect } from '@/entities/Content';
import type { langType } from '@/shared/config/i18n/dictionary';
import { HStack, VStack } from '@/shared/ui/Stack';

import { CreateArticleContext } from '../../model/context/createArticleContext';
import CreateArticleList from '../CreateArticleList/CreateArticleList';

interface CreateArticleCompositionProps {
    langData: langType['createArticle'];
}

export const CreateArticleComposition = (
    props: CreateArticleCompositionProps,
) => {
    const { renderElements, onChangeDropDown } =
        useContext(CreateArticleContext);
    const { langData } = props;
    return (
        <VStack gap="8" as={'ul'}>
            <ContentSelect onChange={onChangeDropDown} langData={langData} />
            <CreateArticleList
                renderElements={renderElements}
                langData={langData}
            />
        </VStack>
    );
};
