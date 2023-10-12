import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import { errorMessage } from '@/shared/lib/alerts/error';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

export const useGetBookmarks = () => {
    const axiosAuth = useAxiosAuth();
    const session = useSession();

    const queryResp = useQuery(
        ['userBookmarks'],
        async () => {
            return await axiosAuth.get(`api/user/bookmarks`);
        },
        {
            enabled: session?.status === 'authenticated',
            // refetchOnWindowFocus: false,
            // refetchOnReconnect: false,
            refetchInterval: false,
            onError: (e: { response: { data: { message: string } } }) => {
                errorMessage(e.response.data.message);
            },
        },
    );
    return queryResp;
};
