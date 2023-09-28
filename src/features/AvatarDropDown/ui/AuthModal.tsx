'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { type FormEventHandler, useState } from 'react';

import { $api } from '@/shared/api/config';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

//TODO

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [isLogin, setisLogin] = useState<boolean>(false);

    const onChaneFormClick = () => {
        setisLogin((prev) => !prev);
    };
    const router = useRouter();

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

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form
                onSubmit={isLogin ? onLoginClick : onRegisterClick}
                className="login-form"
            >
                {!isLogin && <input type="text" name="username" required />}
                <input type="email" name="email" required />
                <input type="password" name="password" required />
                <Button type="submit">{isLogin ? 'Login' : 'Sign up'}</Button>
            </form>
            <Button onClick={onChaneFormClick} variant="clear">
                {isLogin ? 'Sign up now!' : 'Already registered?'}
            </Button>
        </Modal>
    );
};
