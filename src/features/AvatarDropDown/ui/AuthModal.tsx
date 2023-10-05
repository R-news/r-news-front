'use client';

import { useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import { useAuth } from '../model/hooks/useAuth';

//TODO

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [isLogin, setisLogin] = useState<boolean>(false);
    const { onRegisterClick, onLoginClick } = useAuth();

    const onChaneFormClick = () => {
        setisLogin((prev) => !prev);
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
