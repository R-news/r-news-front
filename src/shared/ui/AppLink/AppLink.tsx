import Link, { LinkProps } from 'next/link';
import { forwardRef, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    isActive?: boolean;
    classname?: string;
    href: string | object;
    variant?: AppLinkVariant;
    children?: ReactNode;
    replace?: boolean;
    scroll?: boolean;
    prefetch?: boolean;
    withoutPadding?: boolean;
}

export const AppLink = forwardRef((props: AppLinkProps, ref) => {
    const {
        classname,
        children,
        href,
        replace,
        scroll,
        prefetch,
        variant = 'primary',
        isActive,
        withoutPadding,
        ...otherProps
    } = props;

    return (
        <Link
            //@ts-ignore TODO
            ref={ref}
            className={classNames(
                cls.AppLink,
                {
                    [cls.isActive]: isActive,
                    [cls.withoutPadding]: withoutPadding,
                },
                [classname, cls[variant]],
            )}
            href={href}
            replace={replace}
            scroll={scroll}
            prefetch={prefetch}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
