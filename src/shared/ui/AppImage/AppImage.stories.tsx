import type { Meta, StoryObj } from '@storybook/react';

//TODO FONT STORY
import { AppImage } from './AppImage';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppImage>;

export default meta;

type Story = StoryObj<typeof AppImage>;

export const Normal: Story = {
    args: {
        src: 'https://res.cloudinary.com/dxs7prlcr/image/upload/v1681483386/drbc4g2fxaj4ksdl32cv.png',
        alt: 'TestImage',
        width: 200,
        height: 200,
    },
};
