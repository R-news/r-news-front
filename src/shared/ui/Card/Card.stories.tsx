import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Buttons';
import { VStack } from '../Stack';
import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const WithContent: Story = {
    render: () => {
        return (
            <VStack as={Card} gap="8">
                <p>Title</p>
                <Button>Click</Button>
            </VStack>
        );
    },
};

export const Max: Story = {
    render: () => {
        return (
            <VStack as={Card} gap="8">
                <p>Title</p>
                <Button>Click</Button>
            </VStack>
        );
    },
};
