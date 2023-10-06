import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Loader.module.scss';

type LoaderSize = 's' | 'm' | 'l';
interface LoaderProps {
    className?: string;
    size?: LoaderSize;
}

export const Loader = ({ className, size = 's' }: LoaderProps) => (
    <div className={classNames(cls.spinner, {}, [className, cls[size]])}></div>
);
