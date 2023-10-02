import { cookies } from 'next/headers';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { $api } from '@/shared/api/config';

export const authConfig: AuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'username', type: 'text', required: true },
                email: { label: 'email', type: 'email', required: true },
                password: {
                    label: 'password',
                    type: 'password',
                    required: true,
                },
            },
            async authorize(credentials, req) {
                const { data } = await $api.post(
                    '/api/auth/login',
                    credentials,
                );

                cookies().set({
                    name: 'refreshToken',
                    value: data.userData.refreshToken,
                    httpOnly: true,
                    path: '/',
                });

                if (data.userData) {
                    return data.userData;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
};
