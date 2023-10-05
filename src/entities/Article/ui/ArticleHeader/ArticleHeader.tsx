import React from 'react';

import { getDate } from '@/shared/lib/helpers/getDate/getDate';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

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
                    <Text text={username || 'Unknown'} bold />
                </HStack>
            </AppLink>

            <Text text={getDate(createdAt)} />
        </HStack>
    );
};

export default ArticleHeader;
