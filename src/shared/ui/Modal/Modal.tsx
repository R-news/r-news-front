import { Dialog } from '@headlessui/react';
import { ReactNode } from 'react';

import CrossIcon from '@/shared/assets/icons/cross.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import { Icon } from '../Icon/Icon';
import { Overlay } from '../Overlay/Overlay';
import { HStack } from '../Stack/HStack/HStack';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen?: boolean;
    onClose: any;
    classname?: string;
    title?: string;
    description?: string;
    children?: ReactNode;
}

export const Modal = (props: ModalProps) => {
    const { classname, children, title, description, isOpen, onClose } = props;

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <Overlay ariaHidden classname={cls.overlay} />
            <div className={cls.container}>
                <Dialog.Panel className={cls.modal}>
                    <Icon
                        clickable
                        onClick={onClose}
                        Svg={CrossIcon}
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
