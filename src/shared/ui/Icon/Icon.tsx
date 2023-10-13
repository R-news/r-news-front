import { classNames } from '@/shared/lib/helpers/classNames';

import { Button } from '../Buttons';
import cls from './Icon.module.scss';

interface IconPropsBase {
    className?: string;
    classnameClickable?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    defaultColor?: boolean;
    height?: number | `${number}`;
    width?: number | `${number}`;
    isHover?: boolean;
}

interface NonClickableIconProps extends IconPropsBase {
    clickable?: false;
}

interface ClickableBaseProps extends IconPropsBase {
    clickable: true;
    onClick?: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;
export const Icon = (props: IconProps) => {
    const {
        Svg,
        className,
        classnameClickable,
        height = 30,
        width = 30,
        clickable,
        defaultColor,
        isHover,
    } = props;

    const icon = (
        <Svg
            className={classNames(
                cls.Icon,
                { [cls.iconColor]: defaultColor, [cls.isHover]: isHover },
                [className ? className : classnameClickable],
            )}
            width={width}
            height={height}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <>
                <Button
                    className={classnameClickable}
                    onClick={props.onClick}
                    variant="clear"
                >
                    {icon}
                </Button>
            </>
        );
    }

    return <>{icon}</>;
};
