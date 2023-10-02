import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';

import { AppLoader } from '../../AppLoader';
import { QueryProvider } from '../../QueryProvider';
import { SessionProvider } from '../../SessionProvider';

interface AppProvidersProps {
    children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get('theme')?.value ?? 'auto';
    return (
        <SessionProvider>
            <QueryProvider>
                <>
                    <AppLoader theme={themeCookie}>{children}</AppLoader>
                    <ReactQueryDevtools initialIsOpen={false} />
                </>
            </QueryProvider>
        </SessionProvider>
    );
};

export default AppProviders;
