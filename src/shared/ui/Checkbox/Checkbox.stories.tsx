import type { Meta, StoryObj } from '@storybook/react';

//TODO FONT STORY
import { Checkbox } from './Checkbox';

const meta = {
    title: 'shared/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const WithLabel: Story = {
    args: {
        label: 'Subscribe to newsletter?',
    },
};

export const NoCheck: Story = {
    args: {
        cheked: false,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
