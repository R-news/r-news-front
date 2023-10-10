import type { Meta, StoryObj } from '@storybook/react';

//TODO FONT STORY
import { Rating } from './Rating';

const meta = {
    title: 'shared/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof Rating>;

export const Normal: Story = {
    args: {
        rating: undefined,
    },
};
export const GoodRating: Story = {
    args: {
        rating: 3232,
    },
};
export const BadRating: Story = {
    args: {
        rating: -13,
    },
};
