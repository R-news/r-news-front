import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { QUERY_KEY } from '@/shared/const/queryKeys';
import { errorMessage } from '@/shared/lib/alerts/error';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

export const useMutationAddBookmark = () => {
    const client = useQueryClient();
    const router = useRouter();
    const axiosAuth = useAxiosAuth();
    const { mutate: addBookmark, data } = useMutation(
        async (articleId: string) =>
            await axiosAuth.patch(`api/user/addBookmark/${articleId}`),
        {
            onSuccess: () => {
                client.invalidateQueries([QUERY_KEY.USER_DATA]);
                client.invalidateQueries([QUERY_KEY.USER_BOOKMARKS]);
            },
            onError: (e: { response: { data: { message: string } } }) => {
                // errorMessage(e.response.data.message);
                router.push('/user/auth');
            },
        },
    );
    return {
        addBookmark,
    };
};
