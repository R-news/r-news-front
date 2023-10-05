import { Modal } from '@/shared/ui/Modal';

interface CreateArticleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateArticleModal = (props: CreateArticleModalProps) => {
    const { isOpen, onClose } = props;
    return <Modal isOpen={isOpen} onClose={onClose}></Modal>;
};
