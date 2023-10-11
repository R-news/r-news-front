import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ArticleButtons } from './ArticleButtons';

const meta = {
    title: 'widgets/ArticleButtons',
    component: ArticleButtons,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleButtons>;

export default meta;

type Story = StoryObj<typeof ArticleButtons>;

export const Normal: Story = {
    args: {
        // ...
    },
    render: () => {
        return (
            <div>
                <ArticleButtons likesValue={32} commentsValue={323} id={''} />
            </div>
        );
    },
};
