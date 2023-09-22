import type { Meta, StoryObj } from '@storybook/react';

//TODO FONT STORY
import { Text } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        size: 'l',
    },
};
