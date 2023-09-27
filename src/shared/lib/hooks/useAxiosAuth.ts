'use client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { $api } from '@/shared/api/config';

import { useRefreshToken } from './useRefreshToken';

const useAxiosAuth = () => {
    const { data: session } = useSession();
    const refreshToken = useRefreshToken();

    useEffect(() => {
        const requestIntercept = $api.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers[
                        'Authorization'
                        //@ts-ignore TODO
                    ] = `Bearer ${session?.user.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error),
        );

        const responseIntercept = $api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    await refreshToken();
                    prevRequest.headers[
                        'Authorization'
                        //@ts-ignore TODO
                    ] = `Bearer ${session?.user.accessToken}`;
                    return $api(prevRequest);
                }
                return Promise.reject(error);
            },
        );

        return () => {
            $api.interceptors.request.eject(requestIntercept);
            $api.interceptors.response.eject(responseIntercept);
        };
    }, [session, refreshToken]);

    return $api;
};

export default useAxiosAuth;
