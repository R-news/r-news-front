import { Locale } from '@/shared/config/i18n/i18n';
import {
    getRouteBookmarks,
    getRouteMain,
    getRouteMyFeed,
} from '@/shared/const/route';

export function getsidebarItems(
    lang: Locale,
    sidebar: any,
    role: string | undefined,
) {
    const needUserAuth: any =
        role === 'user'
            ? [
                  { path: getRouteBookmarks(lang), text: sidebar['Bookmarks'] },
                  { path: getRouteMyFeed(lang), text: sidebar['My feed'] },
              ]
            : [];

    return [
        { path: getRouteMain(lang), text: sidebar['Home'] },
        { path: `/${lang}/popular`, text: sidebar['Popular'] },
        ...needUserAuth,
    ];
}
