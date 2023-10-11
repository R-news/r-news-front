import 'server-only';

import { i18n, type Locale } from './i18n';

const dictionaries = {
    en: () =>
        import('../../../dictionaries/en.json').then(
            (module) => module.default,
        ),
    ua: () =>
        import('../../../dictionaries/ua.json').then(
            (module) => module.default,
        ),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();

export type langType = Awaited<ReturnType<typeof getDictionary>>;
