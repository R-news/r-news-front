import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A lang switcher component.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof LangSwitcher>;

export const Normal: Story = {
    args: {
        lang: 'En',
    },
};
