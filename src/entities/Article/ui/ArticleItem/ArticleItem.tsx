import { ReactNode } from 'react';

import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { ArticleUpdate } from '../../model/types/artilce';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
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
        <Card padding="16" max className={css.card} as="li">
            <article>
                <ArticleHeader
                    avatar={user.avatar}
                    username={user.username}
                    createdAt={createdAt}
                    userId={user._id}
                />
                <AppLink href={_id} withoutPadding>
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
            </article>
        </Card>
    );
};
