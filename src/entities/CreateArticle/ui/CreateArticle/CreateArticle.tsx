'use client';

import type { langType } from '@/shared/config/i18n/dictionary';

import CreateArticleProvider from '../../model/context/createArticleContext';
import { CreateArticleComposition } from '../CreateArticleComposition/CreateArticleComposition';

interface CreateArticleProps {
    langData: langType['createArticle'];
}

export const CreateArticle = (props: CreateArticleProps) => {
    const { langData } = props;

    return (
        <CreateArticleProvider>
            <CreateArticleComposition langData={langData} />
        </CreateArticleProvider>
    );
};
