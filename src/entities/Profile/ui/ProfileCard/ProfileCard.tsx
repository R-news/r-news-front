import { headers } from 'next/headers';
import { getServerSession } from 'next-auth';

import Settings from '@/shared/assets/icons/settings.svg';
import { authConfig } from '@/shared/config/auth/auth';
import type { langType } from '@/shared/config/i18n/dictionary';
import { getDate } from '@/shared/lib/helpers/getDate/getDate';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Rating } from '@/shared/ui/Rating';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { ProfileNav } from '../ProfileNav/ProfileNav';
import { ProfileSubscribe } from '../ProfileSubscribe/ProfileSubscribe';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    classname?: string;
    user: any;
    langData: langType['profile'];
}

export const ProfileCard = async (props: ProfileCardProps) => {
    const { classname, user, langData } = props;
    const session = await getServerSession(authConfig);
    const headersList = headers();
    const activePath = headersList.get('x-invoke-path');
    const hrefArray = activePath?.split('/');
    hrefArray?.length === 5 ? hrefArray.splice(4, 1) : hrefArray;

    const link = hrefArray?.join('/');

    const isHref = hrefArray ? hrefArray[3] : '';
    //@ts-ignore
    const isUserProfile = session?.user?.id !== isHref;

    return (
        <Card padding="16" className={cls.card}>
            <HStack justify={'between'}>
                <HStack gap="8">
                    <Avatar src={user.avatar} size={100} />
                    <Text text={user.username} textSize="l" />
                </HStack>
                <HStack gap="16">
                    {isUserProfile && session && <ProfileSubscribe />}
                    <AppLink
                        href={`${link}/settings`}
                        classname={cls.settingsLink}
                    >
                        <Icon
                            clickable
                            isHover
                            Svg={Settings}
                            classnameClickable={cls.icon}
                        />
                    </AppLink>
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
            <ProfileNav activePath={activePath || ''} langData={langData} />
        </Card>
    );
};
