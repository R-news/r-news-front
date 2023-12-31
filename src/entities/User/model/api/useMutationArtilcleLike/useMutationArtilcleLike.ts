'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { QUERY_KEY } from '@/shared/const/queryKeys';
import { errorMessage } from '@/shared/lib/alerts/error';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

export const useMutationArtilcleLike = (revalidate?: Function) => {
    const client = useQueryClient();
    const router = useRouter();
    const axiosAuth = useAxiosAuth();
    const {
        mutate: likeArticle,
        data,
        isError,
    } = useMutation(
        async (articleId: string) =>
            await axiosAuth.patch(`api/user/like/${articleId}`),
        {
            onSuccess: () => {
                client.invalidateQueries([QUERY_KEY.HOME_ARTICLES]);
                client.invalidateQueries([QUERY_KEY.USER_DATA]);
                client.invalidateQueries([QUERY_KEY.USER_BOOKMARKS]);
                client.invalidateQueries([QUERY_KEY.POPULAR_ARTICLES]);
                if (revalidate) {
                    revalidate();
                }
            },
            onError: (e: {
                response: { data: { message: string }; status: number };
            }) => {
                if (e.response.status === 401) {
                    router.push('/user/auth');
                } else {
                    errorMessage(e.response.data.message);
                }
            },
        },
    );

    return {
        likeArticle,
        data,
        isError,
    };
};
