import '@/global/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

import AppProviders from '@/global/providers/AppProviders/ui/AppProviders';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { PageParams } from '@/shared/types/pageParams';
import { Alert } from '@/shared/ui/Alert';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

interface RootLayoutProps {
    children: ReactNode;
    params: PageParams;
    authModal: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    const { children, params, authModal } = props;
    const cookieStore = cookies();
    const themeCookie = cookieStore.get('theme')?.value ?? 'auto';

    return (
        <html
            lang={params.lang}
            className={`${montserrat.variable}`}
            data-theme={themeCookie}
        >
            <body className={`app ${themeCookie}`}>
                <AppProviders>
                    <Navbar themeCookie={themeCookie} lang={params.lang} />
                    <StickyContentLayout
                        left={<Sidebar lang={params.lang} />}
                        content={
                            <>
                                {children}
                                {authModal}
                                <Alert theme={themeCookie} />
                            </>
                        }
                        right={<div>some articles</div>}
                    />
                    {/* <Footer lang={params.lang} /> */}
                </AppProviders>
            </body>
        </html>
    );
}
