import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A theme switcher component.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    args: {},
};
