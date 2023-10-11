import { Switch as HeadlessSwitch } from '@headlessui/react';
import { ReactNode, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Switch.module.scss';

interface SwitchProps {
    isChecked?: boolean;
    onChange: () => void;
    classname?: string;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Switch = (props: SwitchProps) => {
    const { classname, addonLeft, addonRight, onChange, isChecked } = props;
    const [enabled, setEnabled] = useState(isChecked || false);

    const onToggle = (value: boolean) => {
        setEnabled(value);
        onChange();
    };
    return (
        <div className={classNames(cls.container, {}, [classname])}>
            <HeadlessSwitch
                checked={enabled}
                onChange={onToggle}
                className={classNames(
                    cls.Switch,
                    { [cls.enabled]: enabled },
                    [],
                )}
            >
                <span className={cls.srOnly}>Use setting</span>
                <span
                    aria-hidden="true"
                    className={classNames(
                        cls.block,
                        { [cls.enabled]: enabled },
                        [],
                    )}
                />
                <div
                    className={classNames(
                        cls.addonLeft,
                        { [cls.enabled]: enabled },
                        [],
                    )}
                >
                    {addonLeft}
                </div>
                <div className={cls.addonRight}>{addonRight}</div>
            </HeadlessSwitch>
        </div>
    );
};
