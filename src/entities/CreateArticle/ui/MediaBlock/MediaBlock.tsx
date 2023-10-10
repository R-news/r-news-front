import { useState } from 'react';

import { AppImage } from '@/shared/ui/AppImage';
import { Video } from '@/shared/ui/Video';

import { MediaType } from '../../model/types/enums';

interface MediaBlockProps {
    variant?: MediaType;
}

export const MediaBlock = (props: MediaBlockProps) => {
    const { variant = MediaType.MAIN_IMAGE } = props;
    const [link, setLink] = useState('');
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);

    const videoIsReady = variant === MediaType.VIDEO && link;

    if (variant === MediaType.MAIN_IMAGE) {
        return (
            <>
                {link && (
                    <AppImage
                        src={link}
                        width={width}
                        height={height}
                        alt="s"
                    />
                )}
                <input value={link} onChange={(e) => setLink(e.target.value)} />
            </>
        );
    }
    if (variant === MediaType.IMAGE) {
        return (
            <>
                {link && (
                    <AppImage
                        src={link}
                        width={width}
                        height={height}
                        alt="s"
                    />
                )}
                <input value={link} onChange={(e) => setLink(e.target.value)} />
                <input
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                />
                <input
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </>
        );
    }
    return (
        <>
            {videoIsReady && <Video url={link} />}
            <input value={link} onChange={(e) => setLink(e.target.value)} />
        </>
    );
};
