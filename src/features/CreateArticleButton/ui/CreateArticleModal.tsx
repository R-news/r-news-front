import { ReactNode } from 'react';

import { langType } from '@/shared/config/i18n/dictionary';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';

interface CreateArticleModalProps {
    isOpen: boolean;
    langData: langType['createArticle'];
    onClose: () => void;
    content?: ReactNode;
}

export const CreateArticleModal = (props: CreateArticleModalProps) => {
    const { isOpen, onClose, content, langData } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <VStack gap="8">
                {content}
                <Button>{langData.publish}</Button>
            </VStack>
        </Modal>
    );
};
