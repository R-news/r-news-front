import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './CreateArticle.module.scss';

interface CreateArticleProps {
    classname?: string;
}

export const CreateArticle = (props: CreateArticleProps) => {
    const { classname } = props;
    return (
        <div className={classNames(cls.CreateArticle, {}, [classname])}></div>
    );
};
