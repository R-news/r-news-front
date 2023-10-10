'use client';

import { deleteCookie, setCookie } from 'cookies-next';
import { signOut, useSession } from 'next-auth/react';

import { axiosAuth } from '@/shared/api/config';

export const useRefreshToken = () => {
    const session = useSession();
    const refreshToken = async () => {
        try {
            const res = await axiosAuth.get('api/auth/refresh', {
                withCredentials: true,
            });
            if (session?.data?.user) {
                //@ts-ignore TODO

                session.data.user.accessToken = res.data.userData.accessToken;
                setCookie('refreshToken', res.data.userData.refreshToken);
            }
        } catch (e) {
            signOut({ redirect: false });
            deleteCookie('refreshToken');
        }
    };
    return refreshToken;
};
