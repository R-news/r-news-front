'use client';

import { ContentSelect } from '@/entities/Content';
import { classNames } from '@/shared/lib/helpers/classNames';

import { useGetCreateArticles } from '../../model/hooks/useGetCreateArticles';
import CreateArticleList from '../CreateArticleList/CreateArticleList';
import cls from './CreateArticle.module.scss';

interface CreateArticleProps {
    classname?: string;
}

export const CreateArticle = (props: CreateArticleProps) => {
    const { classname } = props;
    const { renderElements, onChangeDropDown } = useGetCreateArticles();

    return (
        <div className={classNames(cls.CreateArticle, {}, [classname])}>
            <ContentSelect onChange={onChangeDropDown} />
            <CreateArticleList renderElements={renderElements} />
        </div>
    );
};
