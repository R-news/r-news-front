import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Link',
        href: '/link',
    },
};

export const Active: Story = {
    args: {
        children: 'Link',
        href: '/link',
        isActive: true,
    },
};
