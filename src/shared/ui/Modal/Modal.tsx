'use client';

import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import CrossIcon from '@/shared/assets/icons/cross.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import { Icon } from '../Icon/Icon';
import { Overlay } from '../Overlay';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    classname?: string;
    title?: string;
    description?: string;
    children?: ReactNode;
}

export const Modal = (props: ModalProps) => {
    const { classname, children, title, description, isOpen, onClose } = props;
    const router = useRouter();

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            router.back();
        }
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <Dialog.Title></Dialog.Title>
            <Overlay ariaHidden classname={cls.overlay} />
            <div className={cls.container}>
                <Dialog.Panel className={cls.modal}>
                    <Icon
                        clickable
                        onClick={handleClose}
                        Svg={CrossIcon}
                        defaultColor
                        classnameClickable={cls.icon}
                    />
                    {title && <Dialog.Title>{title}</Dialog.Title>}
                    {description && (
                        <Dialog.Description>{description}</Dialog.Description>
                    )}
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
