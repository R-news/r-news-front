import { AppLogo } from "../AppLogo";
import { HStack } from "../Stack";
import cls from "./Footer.module.scss"

interface FooterProps {
 classname?: string;
 lang?: string
}

export const Footer = (props: FooterProps) => {
const { classname, lang } = props

 return (
   <HStack as={'footer'} className={classname}>
    <AppLogo lang={lang}/>
   </HStack>
  );
};