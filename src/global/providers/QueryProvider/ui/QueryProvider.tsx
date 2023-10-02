'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
interface QueryProviderProps {
    children?: ReactNode;
}

const queryClient = new QueryClient();
export const QueryProvider = (props: QueryProviderProps) => {
    const { children } = props;
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
