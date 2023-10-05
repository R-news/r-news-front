'use client';
import ReactPlayer from 'react-player';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Video.module.scss';

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
