import 'server-only';

import type { Locale } from './i18n';

const dictionaries = {
    en: () =>
        import('../../../../public/locales/en/en.json').then(
            (module) => module.default,
        ),
    ua: () =>
        import('../../../../public/locales/ua/ua.json').then(
            (module) => module.default,
        ),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
