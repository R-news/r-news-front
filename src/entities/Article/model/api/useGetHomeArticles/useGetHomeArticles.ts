import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/config';
import { STALE_TIME } from '@/shared/const/reactQueryTimes';

export const useGetHomeArticles = () => {
    const queryResp = useQuery(
        ['homeArticles'],
        async () => {
            const resp = await $api.get(`api/articles/home`);

            return resp;
        },
        {
            // refetchOnWindowFocus: false,
            // refetchOnReconnect: false,
            refetchInterval: STALE_TIME,
        },
    );
    return queryResp;
};

export const getHomeArticles = async () => {
    const resp = await $api.get('api/articles/home');
    return resp.data.articles;
};
