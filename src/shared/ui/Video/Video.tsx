'use client';
import dynamic from 'next/dynamic';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Video.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface VideoProps {
    classname?: string;
    url: string;
}

export const Video = (props: VideoProps) => {
    const { classname, url } = props;
    return (
        <div className={classNames(cls.Video, {}, [classname])}>
            <ReactPlayer url={url} controls={true} />
        </div>
    );
};
