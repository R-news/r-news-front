import '../../src/global/styles/index.scss';

import type { Preview } from '@storybook/react';

import GlobalStyleDecorator from '@/shared/config/storybook/GlobalStyleDecorator/GlobalStyleDecorator';
import { ThemeEnum } from '@/shared/types/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: ThemeEnum.LIGHT, color: '#ffffff' },
                { name: 'dark', class: ThemeEnum.DARK, color: '#000000' },
            ],
        },
    },
    decorators: [GlobalStyleDecorator],
};

export default preview;
