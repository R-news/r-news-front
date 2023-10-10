import { Content } from '@/entities/Content';

import { MediaType, TextType } from '../../model/types/enums';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { MediaBlock } from '../MediaBlock/MediaBlock';
import TextBlock from '../TextBlock/TextBlock';

export const renderCreateArticleBlock = (block: any) => {
    switch (block) {
        //TEXT BLOCKS
        case Content.TEXT:
            return <TextBlock />;
        case Content.TITLE:
            return <TextBlock variant={TextType.TITLE} />;
        case Content.SUBTITLE:
            return <TextBlock variant={TextType.SUBTITLE} />;
        //MEDIA BLOCKS
        case Content.MAIN_IMAGE:
            return <MediaBlock />;
        case Content.VIDEO:
            return <MediaBlock variant={MediaType.VIDEO} />;
        case Content.IMAGE:
            return <MediaBlock variant={MediaType.IMAGE} />;
        //CODE
        case Content.CODE:
            return <CodeBlock />;
        default:
            return null;
    }
};
