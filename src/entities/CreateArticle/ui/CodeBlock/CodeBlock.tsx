import type { langType } from '@/shared/config/i18n/dictionary';

interface CodeBlockProps {
    langData?: langType['createArticle'];
    id: string | number;
}
export const CodeBlock = ({ langData, id }: CodeBlockProps) => {
    return (
        <>
            <input placeholder={langData?.TITLE} />
            <textarea placeholder={langData?.CODE} />
        </>
    );
};
