import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof ListBox>;

const options = [
    { value: 'BB', content: 'BB' },
    { value: 'AA', content: 'AA' },
    { value: 'CC', content: 'CC' },
    { value: 'VV', content: 'VV' },
    { value: 'SS', content: 'SS' },
];

export const Normal: Story = {
    render: () => {
        const onChange = (e: any) => e;
        return (
            <>
                <ListBox
                    defaultValue={'value'}
                    onChange={onChange}
                    direction="bottom left"
                    items={options}
                />
            </>
        );
    },
};
