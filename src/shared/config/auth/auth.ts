import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
            async authorize(res, req) {
                const parceUser = JSON.parse(res?.data);

                if (parceUser.accessToken) {
                    return parceUser;
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
