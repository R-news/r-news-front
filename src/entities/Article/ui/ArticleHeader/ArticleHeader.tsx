import React from 'react';

import { getDate } from '@/shared/lib/helpers/getDate/getDate';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleHeader.module.scss';

interface ArticleHeaderProps {
    avatar?: string;
    createdAt?: string;
    username?: string;
    userId: string;
}
const ArticleHeader = (props: ArticleHeaderProps) => {
    const { avatar, createdAt, username, userId } = props;
    return (
        <HStack gap="16">
            <AppLink href={`/profile/${userId}`} withoutPadding>
                <HStack gap="16">
                    <Avatar size={25} src={avatar} />
                    <Text text={username || 'Unknown'} textBold={'bold'} />
                </HStack>
            </AppLink>

            <Text text={getDate(createdAt)} className={cls.date} />
        </HStack>
    );
};

export default ArticleHeader;
