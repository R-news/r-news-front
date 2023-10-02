'use client';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect, useState } from 'react';

interface AppLoaderProps {
    children: ReactNode;
    theme: string;
}

export const AppLoader = ({ children, theme }: AppLoaderProps) => {
    const session = useSession();
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        if (
            session.status === 'authenticated' ||
            session.status === 'unauthenticated'
        ) {
            setIsReady(true);
        }
    }, [session]);

    const loaderTheme =
        theme === 'app_dark_theme' ? 'var(--color-dark)' : 'var(--color-light)';
    return (
        <>
            {isReady ? (
                children
            ) : (
                <div
                    style={{
                        background: loaderTheme,
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    Loading
                </div>
            )}
        </>
    );
};
