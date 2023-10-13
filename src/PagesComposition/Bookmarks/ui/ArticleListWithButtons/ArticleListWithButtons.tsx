'use client';
import { ArticleItem, ArticleList, ArticleUpdate } from '@/entities/Article';
import { useGetBookmarks } from '@/entities/User';
import type { langType } from '@/shared/config/i18n/dictionary';
import { ArticleButtons } from '@/widgets/ArticleButtons';

interface ArticlesListWithButtonsProps {
    classname?: string;
    langData?: langType['shared'];
}

export const ArticlesListWithButtons = ({
    langData,
}: ArticlesListWithButtonsProps) => {
    const { data: { data } = {} } = useGetBookmarks();

    return (
        <ArticleList>
            {data?.articles?.map((article: ArticleUpdate) => (
                <ArticleItem
                    langData={langData}
                    key={article._id}
                    {...article}
                    ButtonsWidget={
                        <ArticleButtons
                            likesValue={article.likes.length}
                            id={article._id}
                            commentsValue={article?.comments}
                        />
                    }
                />
            ))}
        </ArticleList>
    );
};
