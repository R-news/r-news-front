import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/config';
import { QUERY_KEY } from '@/shared/const/queryKeys';
import { STALE_TIME } from '@/shared/const/reactQueryTimes';
import { errorMessage } from '@/shared/lib/alerts/error';

export const useGetHomeArticles = () => {
    const queryResp = useQuery(
        [QUERY_KEY.HOME_ARTICLES],
        async () => {
            const resp = await $api.get(`api/articles/home`);

            return resp;
        },
        {
            // refetchOnWindowFocus: false,
            // refetchOnReconnect: false,
            refetchInterval: STALE_TIME,
            onError: (e: { response: { data: { message: string } } }) => {
                errorMessage(e.response.data.message);
            },
        },
    );
    return queryResp;
};

export const getHomeArticles = async () => {
    const resp = await $api.get('api/articles/home');
    return resp.data.articles;
};
