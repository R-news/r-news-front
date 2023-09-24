import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';

interface AppImageProps extends ImageProps {
    classname?: string;
    src: string | StaticImport;
    width: number | `${number}` | undefined;
    height: number | `${number}` | undefined;
    alt: string;
}

export const AppImage = (props: AppImageProps) => {
    const { classname, src, alt, ...otherProps } = props;
    return <Image src={src} alt={alt} className={classname} {...otherProps} />;
};
