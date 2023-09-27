import { VStack } from '@/shared/ui/Stack';

import { ArticleItem } from '../ArticleItem/ArticleItem';

interface ArticleListProps {
    classname?: string;
}

export const ArticleList = (props: ArticleListProps) => {
    const { classname } = props;

    return (
        <VStack as={'ul'}>
            <ArticleItem />
        </VStack>
    );
};
