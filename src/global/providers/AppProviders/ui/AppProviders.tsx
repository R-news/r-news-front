import React, { ReactNode } from 'react';

import { StoreProvider } from '../../StoreProvider';

interface AppProvidersProps {
    children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
    return <StoreProvider>{children}</StoreProvider>;
};

export default AppProviders;
