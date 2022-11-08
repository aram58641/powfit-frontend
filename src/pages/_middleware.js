import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { origin, pathname, locale, search } = request.nextUrl;

  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes('/api/') &&
    locale === 'default';

  if (shouldHandleLocale) {
    return NextResponse.redirect(`${origin}/hy-am${pathname}${search}`);
  }
}
