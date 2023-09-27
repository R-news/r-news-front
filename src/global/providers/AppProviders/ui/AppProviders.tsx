import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';

import { AppLoader } from '../../AppLoader';
import { SessionProvider } from '../../SessionProvider';

interface AppProvidersProps {
    children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get('theme')?.value ?? 'auto';
    return (
        <SessionProvider>
            <AppLoader theme={themeCookie}>{children}</AppLoader>
        </SessionProvider>
    );
};

export default AppProviders;
