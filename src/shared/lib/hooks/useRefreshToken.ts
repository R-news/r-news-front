'use client';

import { signIn, useSession } from 'next-auth/react';

import { $api } from '@/shared/api/config';

export const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const res = await $api.post('/auth/refresh', {
            //@ts-ignore
            refresh: session?.user.refreshToken,
        });
        //@ts-ignore
        if (session) session.user.accessToken = res.data.accessToken;
        else signIn();
    };
    return refreshToken;
};
