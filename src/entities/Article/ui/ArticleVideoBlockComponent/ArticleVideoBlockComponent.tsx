import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Video } from '@/shared/ui/Video';

import { ArticleVideoBlock } from '../../model/types/artilce';
import cls from './ArticleVideoBlockComponent.module.scss';

interface ArticleVideoBlockComponentProps {
    block: ArticleVideoBlock;
}

export const ArticleVideoBlockComponent = memo(
    (props: ArticleVideoBlockComponentProps) => {
        const { block } = props;

        return (
            <VStack
                gap="16"
                className={cls.ArticleVideoBlockComponent}
                align="center"
            >
                <Video url={block.src} />
                {block.title && <Text text={block.title} align="center" />}
            </VStack>
        );
    },
);
