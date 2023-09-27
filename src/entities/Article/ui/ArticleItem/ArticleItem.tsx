import { AppImage } from '@/shared/ui/AppImage';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import css from './ArticleItem.module.scss';

interface ArticleItemProps {
    classname?: string;
}

const data = {
    title: 'Sample Article',
    subtitle: 'An Example Article',
    img: 'https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg',
    views: 1000,
    userId: 'yourUserIdHere',
    type: 'It',
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
    comments: ['Comment 1', 'Comment 2', 'Comment 3'],
    likes: 42,
    createdAt: '323.32.3232',
};

export const ArticleItem = (props: ArticleItemProps) => {
    const { classname } = props;

    const imageStyle = {
        width: '100%',
    };

    return (
        <Card padding="16" max className={css.card}>
            <HStack gap="8">
                <Text text={data.userId} />
                <Text text={data.createdAt} />
            </HStack>
            <Text title={data.title} />
            <Text text={data.subtitle} />
            <AppImage
                src={data.img}
                sizes="100vw"
                width={0}
                height={300}
                alt={data.title}
                style={imageStyle}
            />
            <HStack>
                <Text title={`${data.views} views`} />
            </HStack>
            <HStack>
                <Text title={`${data.likes} likes`} />
                <Text title={`${data.comments.length} comments`} />
                <Text title={`${data.views} views`} />
            </HStack>
        </Card>
    );
};
