import type { Meta, StoryObj } from '@storybook/react';

import { VStack } from '../Stack';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Square: Story = {
    args: {
        border: '10px',
        width: 200,
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const CompositionOfSkeletons: Story = {
    render: () => {
        return (
            <VStack gap="8">
                <Skeleton width={50} height={50} border="50%" />
                <Skeleton width={50} height={50} border="5px" />
            </VStack>
        );
    },
};
