import React from 'react';

import { renderCreateArticleBlock } from './renderBlock';

interface CreateArticleListProps {
    renderElements: Array<any>;
}

const CreateArticleList = ({ renderElements }: CreateArticleListProps) => {
    return <div>{renderElements.map(renderCreateArticleBlock)}</div>;
};

export default CreateArticleList;
