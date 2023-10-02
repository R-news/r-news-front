import { useMutation, useQueryClient } from '@tanstack/react-query';

import { $api } from '@/shared/api/config';

export const useLikeArticle = (id: string) => {
    const queryClient = useQueryClient();

    const updateArticleLikes = async () => {
        try {
            const response = await $api.patch(`api/user/likeArticle${id}`);
            return response.data;
        } catch (err) {
            alert(err);
        }
    };

    const mutation = useMutation(updateArticleLikes, {
        onSuccess: () => {
            queryClient.refetchQueries(['orders']);
        },
    });

    return mutation;
};
