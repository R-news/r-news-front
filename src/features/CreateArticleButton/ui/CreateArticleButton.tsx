'use client';
import { ReactNode, useCallback, useState } from 'react';

import type { langType } from '@/shared/config/i18n/dictionary';
import { Button } from '@/shared/ui/Button';

import { CreateArticleModal } from './CreateArticleModal';

interface CreateArticleButtonProps {
    langData: langType['navbar'];
    langDataCreateArticle: langType['createArticle'];
    content: ReactNode;
}

export const CreateArticleButton = (props: CreateArticleButtonProps) => {
    const { langData, content, langDataCreateArticle } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    return (
        <>
            <Button onClick={toggleModal}>{langData.Write}</Button>
            {isOpen && (
                <CreateArticleModal
                    content={content}
                    isOpen={isOpen}
                    langData={langDataCreateArticle}
                    onClose={toggleModal}
                />
            )}
        </>
    );
};
