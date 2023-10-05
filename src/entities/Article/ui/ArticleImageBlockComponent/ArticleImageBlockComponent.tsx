import { memo } from 'react';

import { AppImage } from '@/shared/ui/AppImage';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { ArticleImageBlock } from '../../model/types/artilce';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { block } = props;

        return (
            <VStack
                as="figure"
                align="center"
                className={cls.ArticleImageBlockComponent}
            >
                <AppImage
                    src={block.src}
                    alt={block.title}
                    className={cls.img}
                    sizes="100vw"
                    width={0}
                    height={300}
                />
                {block.title && (
                    <Text
                        className={cls.title}
                        textAs="figcaption"
                        text={block.title}
                        align="center"
                    />
                )}
            </VStack>
        );
    },
);
