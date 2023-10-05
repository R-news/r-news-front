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
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const onLikeClick = () => console.log(1);
        const onCommentClick = () => console.log(1);
        const onBookmarkClick = () => console.log(1);

        return (
            <div>
                <ArticleButtons
                    likesValue={32}
                    onLikeClick={() => onLikeClick()}
                    onCommentClick={onCommentClick}
                    onBookmarkClick={() => onBookmarkClick()}
                    isUserBookmark={true}
                    isLiked={false}
                    commentsValue={323}
                />
            </div>
        );
    },
};
