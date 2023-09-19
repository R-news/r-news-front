import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
    classname?: string;
    ariaHidden?: boolean;
}

export const Overlay = (props: OverlayProps) => {
    const { classname, ariaHidden } = props;
    return (
        <div
            className={classNames(cls.Overlay, {}, [classname])}
            aria-hidden={ariaHidden}
        />
    );
};
