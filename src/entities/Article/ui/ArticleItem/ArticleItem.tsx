import { ReactNode } from 'react';

import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { Article } from '../../model/types/artilce';
import css from './ArticleItem.module.scss';

interface ArticleItemProps extends Article {
    classname?: string;
    ButtonsWidget?: ReactNode;
    langData?: any;
}

export const ArticleItem = (props: ArticleItemProps) => {
    const {
        langData,
        classname,
        ButtonsWidget,
        userId,
        createdAt,
        title,
        subtitle,
        img,
        views,
    } = props;

    const imageStyle = {
        width: '100%',
    };

    return (
        <Card padding="16" max className={css.card}>
            <HStack gap="16">
                <Avatar size={20} />
                <Text text={userId} bold />
                <Text text={createdAt} />
            </HStack>
            <Text title={title} />
            <Text text={subtitle} />
            <AppImage
                //@ts-ignore
                src={img}
                sizes="100vw"
                width={0}
                height={300}
                //@ts-ignore
                alt={title}
                style={imageStyle}
            />
            <Text text={`${views} ${langData?.views}`} />
            {ButtonsWidget && ButtonsWidget}
        </Card>
    );
};
