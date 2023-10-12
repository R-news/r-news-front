import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/config';
import { QUERY_KEY } from '@/shared/const/queryKeys';
import { STALE_TIME } from '@/shared/const/reactQueryTimes';
import { errorMessage } from '@/shared/lib/alerts/error';

export const useGetPopularArticles = () => {
    const queryResp = useQuery(
        [QUERY_KEY.POPULAR_ARTICLES],
        async () => {
            const resp = await $api.get(`api/articles/popular`);

            return resp;
        },
        {
            refetchOnMount: true,
            refetchInterval: STALE_TIME,
            onError: (e: { response: { data: { message: string } } }) => {
                errorMessage(e.response.data.message);
            },
        },
    );
    return queryResp;
};

export const getPopularArticles = async () => {
    const resp = await $api.get('api/articles/popular');
    return resp.data.articles;
};
