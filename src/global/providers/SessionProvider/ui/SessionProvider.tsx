'use client';
import { SessionProvider as AuthSessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { useGetUserData } from '@/entities/User';

interface SessionProviderProps {
    children: ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
    return <AuthSessionProvider>{children}</AuthSessionProvider>;
};
