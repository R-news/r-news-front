import { useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/shared/const/queryKeys';

export const useGetFetchQuery = (key: QUERY_KEY) => {
    const queryClient = useQueryClient();

    return queryClient.getQueryData([key]);
};
