'use client';
import { useSession } from 'next-auth/react';

import { useGetUserData, useMutationSubscribeToUser } from '@/entities/User';
import { getDate } from '@/shared/lib/helpers/getDate/getDate';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { SubscribeButton } from '@/shared/ui/Buttons';
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
    const { subscribe } = useMutationSubscribeToUser();
    const session = useSession();
    const { data: { data } = {} } = useGetUserData();

    //@ts-ignore
    const isUserprofile = session?.data?.user?.id === userId;
    const isSubscribed = data?.userData?.subscriptions?.includes(userId);

    return (
        <HStack justify={'between'} max>
            <HStack gap="16">
                <AppLink href={`/profile/${userId}`} withoutPadding>
                    <HStack gap="16">
                        <Avatar size={25} src={avatar} />
                        <Text text={username || 'Unknown'} textBold={'bold'} />
                    </HStack>
                </AppLink>
                <Text text={getDate(createdAt)} className={cls.date} />
            </HStack>
            {!isUserprofile && (
                <SubscribeButton
                    isSmall
                    onClick={() => subscribe(userId)}
                    isSubscribed={isSubscribed}
                />
            )}
        </HStack>
    );
};

export default ArticleHeader;
