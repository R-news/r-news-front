import type { Meta, StoryObj } from '@storybook/react';

import IconTest from '@/shared/assets/icons/bookmark.svg';

import { Icon } from './Icon';

const meta = {
    title: 'shared/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Normal: Story = {
    args: {
        Svg: IconTest,
    },
};

export const Big: Story = {
    args: {
        Svg: IconTest,
        width: 100,
        height: 100,
    },
};

export const Clickable: Story = {
    args: {
        clickable: true,
        Svg: IconTest,
    },
};
