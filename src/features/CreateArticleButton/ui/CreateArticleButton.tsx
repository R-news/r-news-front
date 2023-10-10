'use client';
import { useState } from 'react';

import { Button } from '@/shared/ui/Button';

import { CreateArticleModal } from './CreateArticleModal';

interface CreateArticleButtonProps {
    langData: any;
    content: any;
}

export const CreateArticleButton = (props: CreateArticleButtonProps) => {
    const { langData, content } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Button onClick={() => setIsOpen((prev) => !prev)}>
                {langData.Write}
            </Button>
            {isOpen && (
                <CreateArticleModal
                    content={content}
                    isOpen={isOpen}
                    onClose={() => setIsOpen((prev) => !prev)}
                />
            )}
        </>
    );
};
