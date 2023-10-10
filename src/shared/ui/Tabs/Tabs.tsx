'use client';

import { Tab } from '@headlessui/react';

import { classNames } from '@/shared/lib/helpers/classNames';

import { AppLink } from '../AppLink';
import styles from './Tabs.module.scss';

export interface Item {
    path?: string;
    text?: string;
    onClick?: () => void;
    href?: boolean;
}

interface TabsProps {
    className?: string;
    items: Item[];
}

export const Tabs = (props: TabsProps) => {
    const { className, items } = props;

    return (
        <div className={styles.outerContainer}>
            <Tab.Group>
                <Tab.List className={styles.tabList}>
                    {items.map((el) => {
                        if (el.path) {
                            return (
                                <Tab
                                    as={AppLink}
                                    href={el.path || ''}
                                    key={el.path}
                                    //@ts-ignore
                                    className={({ selected }) =>
                                        classNames(styles.tab, {
                                            [styles.isSelected]: selected,
                                        })
                                    }
                                >
                                    {el.text}
                                </Tab>
                            );
                        }

                        return (
                            <Tab
                                key={el.path}
                                className={({ selected }) =>
                                    classNames(styles.tab, {
                                        [styles.isSelected]: selected,
                                    })
                                }
                                onClick={el.onClick}
                            >
                                {el.text}
                            </Tab>
                        );
                    })}
                </Tab.List>
            </Tab.Group>
        </div>
    );
};
