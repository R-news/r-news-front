import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import { type FormEventHandler } from 'react';

import { $api, setAuthToken } from '@/shared/api/config';

export const useAuth = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const onLogout = async () => {
        await $api.post('/api/auth/logout');
        await signOut({ redirect: false });
        setAuthToken();
        router.refresh();
    };

    const onRegisterClick: FormEventHandler<HTMLFormElement> = async (
        event,
    ) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const { data } = await $api.post('/api/auth/registration', {
            email: formData.get('email'),
            password: formData.get('password'),
            username: formData.get('username'),
        });

        if (data.userData) {
            await signIn('credentials', {
                email: formData.get('email'),
                password: formData.get('password'),
                redirect: false,
            });
            router.refresh();
        }
    };

    const onLoginClick: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        if (res && !res.error) {
            router.refresh();
            router.push('/profile');
        } else {
            console.log(res);
        }
    };

    return { onLogout, onRegisterClick, onLoginClick, isOpen, setIsOpen };
};
