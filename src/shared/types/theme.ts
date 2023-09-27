export const themes = ['app_light_theme', 'app_dark_theme', 'auto'] as const;
export type Theme = (typeof themes)[number];

export enum ThemeEnum {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    AUTO = 'auto',
}
