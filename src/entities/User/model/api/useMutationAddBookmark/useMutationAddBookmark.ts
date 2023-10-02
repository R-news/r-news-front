import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/shared/const/queryKeys';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

export const useMutationAddBookmark = () => {
    const client = useQueryClient();
    const axiosAuth = useAxiosAuth();
    const { mutate: addBookmark, data } = useMutation(
        async (articleId: string) =>
            await axiosAuth.patch(`api/user/addBookmark/${articleId}`),
        {
            onSuccess: () => {
                client.invalidateQueries([QUERY_KEY.USER_DATA]);
                client.invalidateQueries([QUERY_KEY.USER_BOOKMARKS]);
            },
            onError: () => {
                alert('error');
            },
        },
    );
    return {
        addBookmark,
    };
};
