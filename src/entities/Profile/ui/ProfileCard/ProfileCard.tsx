import { headers } from 'next/headers';

import Settings from '@/shared/assets/icons/settings.svg';
import { getDate } from '@/shared/lib/helpers/getDate/getDate';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
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
    langData: any;
}

export const ProfileCard = async (props: ProfileCardProps) => {
    const { classname, user, langData } = props;
    const headersList = headers();
    const activePath = headersList.get('x-invoke-path');
    const hrefArray = activePath?.split('/');
    hrefArray?.length === 5 ? hrefArray.splice(4, 1) : hrefArray;

    const link = hrefArray?.join('/');

    return (
        <Card padding="16" className={cls.card}>
            <HStack justify={'between'}>
                <HStack gap="8">
                    <Avatar src={user.avatar} size={100} />
                    <Text text={user.username} textSize="l" />
                </HStack>
                <HStack gap="16">
                    <ProfileSubscribe
                        pageProfileId={hrefArray && hrefArray[3]}
                    />
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
