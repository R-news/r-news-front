import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';
import { ReactElement } from 'react';

interface AppImageProps extends ImageProps {
    classname?: string;
    src: string | StaticImport;
    width: number | `${number}` | undefined;
    height: number | `${number}` | undefined;
    alt: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = (props: AppImageProps) => {
    const { classname, src, alt, errorFallback, ...otherProps } = props;

    if (!src) {
        return errorFallback;
    }

    return <Image src={src} alt={alt} className={classname} {...otherProps} />;
};
