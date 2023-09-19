import type { Meta, StoryObj } from '@storybook/react';

import { AppLogo } from './AppLogo';

const meta = {
    title: 'shared/AppLogo',
    component: AppLogo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppLogo>;

export default meta;

type Story = StoryObj<typeof AppLogo>;

export const Primary: Story = {
    args: {},
};
