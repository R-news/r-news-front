import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import arrowDown from '../../../../assets/icons/arrowDown.svg';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popupsGlobal.module.scss';
import cls from './DropDown.module.scss';
export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
    withArrow?: boolean;
}

export function DropDown(props: DropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = 'bottom right',
        withArrow,
    } = props;

    const menuClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            {({ open }) => (
                <HStack gap="4">
                    <Menu.Button className={popupCls.trigger}>
                        {trigger}
                    </Menu.Button>
                    <Menu.Items
                        className={classNames(cls.menu, {}, menuClasses)}
                    >
                        {items.map((item, index) => {
                            const content = ({
                                active,
                            }: {
                                active: boolean;
                            }) => (
                                <button
                                    type="button"
                                    disabled={item.disabled}
                                    onClick={item.onClick}
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                    })}
                                >
                                    {item.content}
                                </button>
                            );

                            if (item.href) {
                                return (
                                    <Menu.Item
                                        as={AppLink}
                                        href={item.href}
                                        disabled={item.disabled}
                                        key={`dropdown-key-${index}`}
                                    >
                                        {content}
                                    </Menu.Item>
                                );
                            }

                            return (
                                <Menu.Item
                                    key={`dropdown-key-${index}`}
                                    as={Fragment}
                                    disabled={item.disabled}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        })}
                    </Menu.Items>
                    {withArrow && (
                        <Icon
                            className={classNames('', { [cls.isOpen]: open })}
                            Svg={arrowDown}
                            width={15}
                            height={15}
                            defaultColor
                        />
                    )}
                </HStack>
            )}
        </Menu>
    );
}
