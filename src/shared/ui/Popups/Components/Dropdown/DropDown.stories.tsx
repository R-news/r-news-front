import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/shared/ui/Button';

import { DropDown } from './DropDown';

const meta = {
    title: 'shared/DropDown',
    component: DropDown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof DropDown>;

export default meta;

type Story = StoryObj<typeof DropDown>;

const items = [
    {
        content: 'TextProfile',
        href: 'link',
    },
    {
        content: 'Logout',
    },
];

export const Normal: Story = {
    render: () => {
        return (
            <>
                <DropDown
                    direction="bottom left"
                    items={items}
                    trigger={<Button>Trigger</Button>}
                />
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
            </>
        );
    },
};
