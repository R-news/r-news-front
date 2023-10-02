import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

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
        },
    );
    return queryResp;
};
