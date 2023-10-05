import type { Meta, StoryObj } from '@storybook/react';

import { Video } from './Video';

const meta = {
    title: 'shared/Video',
    component: Video,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof Video>;

export const Normal: Story = {
    args: {
        url: 'https://www.youtube.com/watch?v=sJbexcm4Trk&ab_channel=Cyberpunk2077',
    },
};
