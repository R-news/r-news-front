import { AppImage } from '@/shared/ui/AppImage';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { Article } from '../../model/types/artilce';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
import cls from './ArticleDetails.module.scss';
import { renderArticleBlock } from './renderBlock';

interface ArticleDetailsWithFeaturesProps {
    article: Article;
}
export const ArticleDetails = ({
    article,
}: ArticleDetailsWithFeaturesProps) => {
    return (
        <>
            <VStack gap="32">
                <ArticleHeader
                    avatar={article.userId.avatar}
                    username={article.userId.username}
                    createdAt={article.createdAt}
                    userId={article.userId._id}
                />
                <Text title={article?.title} size="l" bold />
                <Text title={article?.subtitle} />
                {article.img && (
                    <AppImage
                        src={article?.img}
                        className={cls.img}
                        sizes="100vw"
                        width={0}
                        height={300}
                        alt={article?.title}
                    />
                )}
                {article.blocks.map(renderArticleBlock)}
            </VStack>
        </>
    );
};
