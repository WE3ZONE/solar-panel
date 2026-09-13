import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/app/demo-1/_lib/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  if (pathname === "/demo-1") {
    url.pathname = `/demo-1/${defaultLocale}`;
    return NextResponse.redirect(url);
  }
  if (locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) {
    url.pathname = `/demo-1${pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
