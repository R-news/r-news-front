import React, { ReactNode } from 'react';

import { StoreProvider } from '../../StoreProvider';
import { ThemeProvider } from '../../ThemeProvider';

interface AppProvidersProps {
    children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <StoreProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
    );
};

export default AppProviders;
