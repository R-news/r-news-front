import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Buttons';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const OnButtonClick: Story = {
    args: {
        // ...
    },
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <p>text</p>
                </Modal>
            </div>
        );
    },
};
