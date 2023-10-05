'use client';
import { useState } from 'react';

import { Button } from '@/shared/ui/Button';

import { CreateArticleModal } from './CreateArticleModal';

interface CreateArticleButtonProps {
    langData: any;
}

export const CreateArticleButton = (props: CreateArticleButtonProps) => {
    const { langData } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Button onClick={() => setIsOpen((prev) => !prev)}>
                {langData.Write}
            </Button>
            {isOpen && (
                <CreateArticleModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen((prev) => !prev)}
                />
            )}
        </>
    );
};
