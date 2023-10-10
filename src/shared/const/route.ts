import { Locale } from '../config/i18n/i18n';

export enum AppRoutes {
    MAIN = 'main',
    MYFEED = 'myfeed',
    BOOKMARKS = 'bookmarks',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = (lang: Locale) => `/${lang}/`;
export const getRouteBookmarks = (lang: Locale) => `/${lang}/bookmarks`;
export const getRouteMyFeed = (lang: Locale) => `/${lang}/myfeed`;
export const getRouteProfile = (lang: Locale, id: string) =>
    `/${lang}/profile/${id}`;
export const getRouteForbidden = () => '/forbidden';

// export function getRoutes(lang:Locale): Record<string, AppRoutes> {
// return {
//     [getRouteMain(lang)]: AppRoutes.MAIN,
//     [getRouteBookmarks(lang)]: AppRoutes.BOOKMARKS,
//     [getRouteMyFeed(lang)]: AppRoutes.MYFEED,
//     [getRouteForbidden()]: AppRoutes.FORBIDDEN,
// }
// }
