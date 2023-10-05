import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import { QUERY_KEY } from '@/shared/const/queryKeys';
import { STALE_TIME } from '@/shared/const/reactQueryTimes';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

export const useGetUserData = () => {
    const axiosAuth = useAxiosAuth();
    const session = useSession();
    const queryClient = useQueryClient();

    const queryResp = useQuery(
        ['userData'],
        async () => {
            await axiosAuth.get('api/auth/refresh');
            return await axiosAuth.get(`api/user/data`);
        },
        {
            enabled: session?.status === 'authenticated',
            // refetchOnWindowFocus: false,
            // refetchOnReconnect: false,
            staleTime: STALE_TIME,
        },
    );

    const invalidateCache = () => {
        queryClient.invalidateQueries([QUERY_KEY.USER_DATA]);
    };
    return { ...queryResp, invalidateCache };
};
