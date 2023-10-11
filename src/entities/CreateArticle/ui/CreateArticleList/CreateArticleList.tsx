import React from 'react';

import type { langType } from '@/shared/config/i18n/dictionary';

import { TextType } from '../../model/types/enums';
import { RenderElement } from '../../model/types/types';
import TextBlock from '../TextBlock/TextBlock';
import { renderCreateArticleBlock } from './renderBlock';

interface CreateArticleListProps {
    renderElements: Array<RenderElement>;
    langData: langType['createArticle'];
}

const CreateArticleList = ({
    renderElements,
    langData,
}: CreateArticleListProps) => {
    return (
        <>
            <TextBlock id={''} langData={langData} variant={TextType.TITLE} />
            {Object.values(renderElements)?.map((block, index) => (
                <div key={index}>
                    {renderCreateArticleBlock(block.value, langData, block.id)}
                </div>
            ))}
        </>
    );
};

export default CreateArticleList;
