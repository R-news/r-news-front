import { classNames } from '@/shared/lib/helpers/classNames';

import { Button } from '../Button';
import cls from './Icon.module.scss';

interface IconPropsBase {
    classname?: string;
    classnameClickable?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    height?: number | `${number}`;
    width?: number | `${number}`;
}

interface NonClickableIconProps extends IconPropsBase {
    clickable?: false;
}

interface ClickableBaseProps extends IconPropsBase {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;
export const Icon = (props: IconProps) => {
    const {
        Svg,
        classname,
        classnameClickable,
        height = 30,
        width = 30,
        clickable,
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [classname])}
            width={width}
            height={height}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <Button
                className={classnameClickable}
                onClick={props.onClick}
                variant="clear"
            >
                {icon}
            </Button>
        );
    }

    return <>{icon}</>;
};
