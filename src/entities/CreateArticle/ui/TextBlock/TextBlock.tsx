import { TextType } from '../../model/types/enums';

interface TextBlockProps {
    variant?: TextType;
}

export const TextBlock = (props: TextBlockProps) => {
    const { variant = TextType.TEXT } = props;
    return <input />;
};

export default TextBlock;
