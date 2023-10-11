import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/shared/const/queryKeys';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

export const useMutationArtilcleLike = (revalidate?: any) => {
    const client = useQueryClient();
    const axiosAuth = useAxiosAuth();
    const { mutate: likeArticle, data } = useMutation(
        async (articleId: string) =>
            await axiosAuth.patch(`api/user/like/${articleId}`),
        {
            onSuccess: () => {
                client.invalidateQueries([QUERY_KEY.HOME_ARTICLES]);
                client.invalidateQueries([QUERY_KEY.USER_DATA]);
                client.invalidateQueries([QUERY_KEY.USER_BOOKMARKS]);
                if (revalidate) {
                    revalidate();
                }
            },
            onError: (e) => {
                alert('error');
            },
        },
    );
    return {
        likeArticle,
        data,
    };
};
