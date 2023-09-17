import '../../src/global/styles/index.scss'

import type { Preview } from "@storybook/react";

import GlobalStyleDecorator from '@/shared/config/storybook/GlobalStyleDecorator/GlobalStyleDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'light',
      list: [
          { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
          { name: 'dark', class: Theme.DARK, color: '#000000' },
      ],
  },
  },
  decorators: [
    ThemeDecorator,
    GlobalStyleDecorator
  ],
};


export default preview;
