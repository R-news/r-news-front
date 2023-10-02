import { ReactNode } from 'react';

import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { ArticleUpdate } from '../../model/types/artilce';
import css from './ArticleItem.module.scss';

interface ArticleItemProps extends ArticleUpdate {
    classname?: string;
    ButtonsWidget?: ReactNode;
    langData?: any;
}

export const ArticleItem = (props: ArticleItemProps) => {
    const {
        _id,
        langData,
        classname,
        ButtonsWidget,
        createdAt,
        title,
        subtitle,
        img,
        views,
        user,
    } = props;

    return (
        <Card padding="16" max className={css.card}>
            <AppLink href={_id} withoutPadding>
                <HStack gap="16">
                    <Avatar size={20} src={user.avatar} />
                    <Text text={user.username} bold />
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
                    className={css.img}
                />
                <Text text={`${views} ${langData?.views}`} />
            </AppLink>
            {ButtonsWidget && ButtonsWidget}
        </Card>
    );
};
