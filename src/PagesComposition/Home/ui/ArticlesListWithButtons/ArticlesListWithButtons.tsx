'use client';
import { ArticleItem, ArticleList } from '@/entities/Article';
import { ArticleButtons } from '@/widgets/ArticleButtons';

interface ArticlesListWithButtonsProps {
    classname?: string;
    langData?: any;
}
const articles = [
    {
        _id: 'fdsfds',
        title: 'Sample Article',
        subtitle: 'An Example Article',
        img: 'https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg',
        views: 1000,
        userId: 'yourUserIdHere',
        type: 'IT',
        blocks: [
            {
                type: 'text',
                paragraphs: [
                    'string[]',
                    'string[]',
                    'string[]string[]string[]string[]string[]string[]',
                ],
                title: 'TEXT BLOCK TITLE',
            },
            {
                type: 'IMAGE',
                src: 'https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg',
                title: 'PHOTO TEXT',
            },
            // Add more blocks as needed
        ],
        comments: 5,
        likes: ['Comment 1', 'Comment 2', 'Comment 3'],
        createdAt: 'createdAt',
    },
    {
        _id: 'ds2',
        title: 'Sample Article',
        subtitle:
            'An Example Article An Example ArticleAn Example Article An Example Article An Example ArticleAn Example ArticleAn Example Article An Example ArticleAn Example Article An Example Article An Example ArticleAn Example ArticleAn Example Article An Example ArticleAn Example Article ',
        img: 'https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg',
        views: 1000,
        userId: 'yourUserIdHere',
        type: 'IT',
        blocks: [
            {
                type: 'text',
                paragraphs: [
                    'string[]',
                    'string[]',
                    'string[]string[]string[]string[]string[]string[]',
                ],
                title: 'TEXT BLOCK TITLE',
            },
            {
                type: 'IMAGE',
                src: 'https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg',
                title: 'PHOTO TEXT',
            },
            // Add more blocks as needed
        ],
        comments: 2,
        likes: ['Comment 1', 'Comment 2', 'Comment 3'],
        createdAt: 'createdAt',
    },
];

export const ArticlesListWithButtons = ({
    langData,
}: ArticlesListWithButtonsProps) => {
    const onLikeClick = () => console.log(1);
    const onCommentClick = () => console.log(1);
    const onDislikeClick = () => console.log(1);
    const onBookmarkClick = () => console.log(1);
    const isUserBookmark = true;
    const isLiked = true;

    return (
        <ArticleList>
            {articles?.map((article) => (
                //@ts-ignore
                <ArticleItem
                    langData={langData}
                    key={article._id}
                    {...article}
                    ButtonsWidget={
                        <ArticleButtons
                            likesValue={article?.likes.length}
                            onLikeClick={onLikeClick}
                            onDislikeClick={onDislikeClick}
                            onCommentClick={onCommentClick}
                            onBookmarkClick={onBookmarkClick}
                            isUserBookmark={isUserBookmark}
                            isLiked={isLiked}
                            commentsValue={article?.comments}
                        />
                    }
                />
            ))}
        </ArticleList>
    );
};
