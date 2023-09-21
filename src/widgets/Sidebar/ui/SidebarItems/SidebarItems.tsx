'use client'
import { useSelectedLayoutSegment } from "next/navigation";

import { classNames } from "@/shared/lib/helpers/classNames"
import { AppLink } from "@/shared/ui/AppLink";


interface SidebarItemsProps {
 classname?: string;
 href: string;
 text: string;
}

export const SidebarItems = (props: SidebarItemsProps) => {
const { classname, href,  text} = props
const activeSegment = useSelectedLayoutSegment()

const isActive = activeSegment === href.split('/')[2].replace('/', '')

 return (
   <li>
    <AppLink href={href} isActive={isActive}>
        {text}
    </AppLink>
   </li>
  );
};