import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from '@/shared/config/i18n/i18n';

import { getLocale } from './shared/config/i18n/getLocale';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url,
            ),
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        '/en/profile',
        '/protected/:path',
    ],
};

//TODO
// export { default} from 'next-auth/middleware';

// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: [
//       '/en/profile',
//       '/protected/:path',
//   ],
// };
