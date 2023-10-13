import { getServerSession } from 'next-auth';

import { authConfig } from '@/shared/config/auth/auth';
import type { langType } from '@/shared/config/i18n/dictionary';
import { getDate } from '@/shared/lib/helpers/getDate/getDate';
import { Avatar } from '@/shared/ui/Avatar';
import { SubscribeButton } from '@/shared/ui/Buttons';
import { Card } from '@/shared/ui/Card';
import { Rating } from '@/shared/ui/Rating';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { ProfileNav } from '../ProfileNav/ProfileNav';
import { SettingsLink } from '../SettingsLink/SettingsLink';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    classname?: string;
    user: any;
    langData: langType['profile'];
}

export const ProfileCard = async (props: ProfileCardProps) => {
    const { classname, user, langData } = props;
    const session = await getServerSession(authConfig);

    //@ts-ignore
    const isUserProfile = session?.user?.id !== user._id;

    return (
        <Card padding="16" className={cls.card}>
            <HStack justify={'between'}>
                <HStack gap="8">
                    <Avatar src={user.avatar} size={100} />
                    <Text text={user.username} textSize="l" />
                </HStack>
                <HStack gap="16" align={'center'}>
                    {isUserProfile && session && <SubscribeButton />}
                    <SettingsLink />
                </HStack>
            </HStack>
            <VStack gap="16" className={cls.info}>
                <HStack gap="16" align="center">
                    <Text text={`${langData.userRating}:`} />
                    <Rating rating={user.rating} />
                    <Text text={`${langData.subscribers}:`} />
                    <Text
                        text={`${user.subscribers?.length || 0}`}
                        variant={'accent'}
                    />
                </HStack>
                <Text
                    text={`${langData.createdAt} ${getDate(
                        user.createdAt,
                        true,
                    )}`}
                />
            </VStack>
            <ProfileNav
                langData={langData}
                role={
                    //@ts-ignore
                    session!.user!.role
                }
            />
        </Card>
    );
};
