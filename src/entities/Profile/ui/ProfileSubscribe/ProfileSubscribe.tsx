'use client';

import { useSession } from 'next-auth/react';

import { Button } from '@/shared/ui/Button';

interface ProfileSubscribeprops {
    pageProfileId?: string;
}
export const ProfileSubscribe = ({ pageProfileId }: ProfileSubscribeprops) => {
    const session = useSession();
    //@ts-ignore
    const isUserProfile = pageProfileId === session?.data?.user?.id;
    if (isUserProfile || session.status === 'unauthenticated') {
        return null;
    }

    return <Button>Subscribe</Button>;
};
