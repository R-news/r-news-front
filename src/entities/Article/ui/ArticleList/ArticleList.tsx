import { ReactNode } from 'react';

import { VStack } from '@/shared/ui/Stack';
interface ArticleListProps {
    classname?: string;
    children: ReactNode;
}

export const ArticleList = (props: ArticleListProps) => {
    const { classname, children } = props;

    return (
        <VStack as={'ul'} align={'center'} gap="16">
            {children}
        </VStack>
    );
};
