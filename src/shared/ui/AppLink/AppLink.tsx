import Link, { LinkProps } from 'next/link'
import {memo, ReactNode} from 'react'

import { classNames } from "@/shared/lib/helpers/classNames";

import cls from "./AppLink.module.scss"

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    isActive?: boolean;
 classname?: string;
 href: string | object;
 variant?: AppLinkVariant;
 children?: ReactNode
 replace?: boolean
 scroll?: boolean
 prefetch?: boolean
}

export const AppLink = memo((props: AppLinkProps) => {
const { classname, children, href, replace, scroll, prefetch,variant = 'primary', isActive, ...otherProps } = props
 return (
   <Link 
   className={classNames(cls.AppLink,{[cls.isActive]: isActive}, [classname, cls[variant]] )} href={href} replace={replace} scroll={scroll} prefetch={prefetch} {...otherProps}> 
   {children}
   </Link>
  );
});