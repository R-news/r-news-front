import { Content } from '@/entities/Content';
import { langType } from '@/shared/config/i18n/dictionary';

import { MediaType, TextType } from '../../model/types/enums';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { MediaBlock } from '../MediaBlock/MediaBlock';
import TextBlock from '../TextBlock/TextBlock';

export const renderCreateArticleBlock = (
    block: string,
    langData: langType['createArticle'],
    id: string | number,
) => {
    switch (block) {
        //TEXT BLOCKS
        case Content.TEXT:
            return <TextBlock langData={langData} id={id} />;
        case Content.SUBTITLE:
            return (
                <TextBlock
                    langData={langData}
                    variant={TextType.SUBTITLE}
                    id={id}
                />
            );
        //MEDIA BLOCKS
        case Content.MAIN_IMAGE:
            return <MediaBlock langData={langData} id={id} />;
        case Content.VIDEO:
            return (
                <MediaBlock
                    langData={langData}
                    variant={MediaType.VIDEO}
                    id={id}
                />
            );
        case Content.IMAGE:
            return (
                <MediaBlock
                    langData={langData}
                    variant={MediaType.IMAGE}
                    id={id}
                />
            );
        //CODE
        case Content.CODE:
            return <CodeBlock langData={langData} id={id} />;
        default:
            return null;
    }
};
