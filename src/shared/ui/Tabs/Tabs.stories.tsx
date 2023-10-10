import type { Meta, StoryObj } from '@storybook/react';

//TODO FONT STORY
import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
    args: {
        items: [
            {
                path: `${'2'}/articles`,
                text: 'profile',
            },
            {
                path: `${'2'}/comments`,
                text: 'fdsfdsfdsf',
            },
            {
                path: `${'2'}/subscribers`,
                text: 'fdsfsfdffsdsdfsdfdsfdsf',
                href: true,
            },
            {
                text: 'fdsfsfdffsdsdfsdfdsfdsf',
                onClick: () => console.log('click'),
            },
        ],
    },
};
