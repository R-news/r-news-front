'use client';
import { useGetUserData, useMutationSubscribeToUser } from '@/entities/User';
import { SubscribeButton } from '@/shared/ui/Buttons';

interface SubscribedButtonProps {
    classname?: string;
    userId: string;
    revalidate: Function;
}

export const ProfileSubscribedButton = ({
    userId,
    revalidate,
}: SubscribedButtonProps) => {
    const { data: { data } = {} } = useGetUserData();
    const { subscribe } = useMutationSubscribeToUser(revalidate);

    const isSubscribed = data?.userData?.subscriptions?.includes(userId);
    return (
        <SubscribeButton
            isSubscribed={isSubscribed}
            onClick={() => subscribe(userId)}
        />
    );
};
