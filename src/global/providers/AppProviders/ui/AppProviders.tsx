import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { ReactNode } from 'react';

import { QueryProvider } from '../../QueryProvider';
import { SessionProvider } from '../../SessionProvider';

interface AppProvidersProps {
    children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <SessionProvider>
            <QueryProvider>
                <>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </>
            </QueryProvider>
        </SessionProvider>
    );
};

export default AppProviders;
