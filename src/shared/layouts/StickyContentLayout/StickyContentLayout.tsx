import { memo, ReactElement, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactNode;
    right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;

    return (
        <main className={classNames(cls.MainLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <section className={cls.content}>{content}</section>
            {right && <div className={cls.right}>{right}</div>}
        </main>
    );
});
