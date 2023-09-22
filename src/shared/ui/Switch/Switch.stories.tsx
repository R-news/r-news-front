import type { Meta, StoryObj } from '@storybook/react';

import IconTest from '../../assets/icons/bookmark.svg';
import { Icon } from '../Icon';
import { Switch } from './Switch';

const meta = {
    title: 'shared/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Normal: Story = {
    args: {},
};

export const WithIcons: Story = {
    args: {
        addonLeft: <Icon Svg={IconTest} width={25} height={25} />,
        addonRight: <Icon Svg={IconTest} width={25} height={25} />,
    },
};
