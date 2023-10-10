import { Modal } from '@/shared/ui/Modal';

interface CreateArticleModalProps {
    isOpen: boolean;
    onClose: () => void;
    content?: any;
}

export const CreateArticleModal = (props: CreateArticleModalProps) => {
    const { isOpen, onClose, content } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {content}
        </Modal>
    );
};
