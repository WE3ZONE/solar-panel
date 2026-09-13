import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Vazirmatn, Space_Grotesk, Inter } from "next/font/google";
import "../globals.css";
import { locales, localeDir, isLocale, type Locale } from "@/app/demo-1/_lib/i18n/config";
import { getDictionary } from "@/app/demo-1/_lib/i18n/get-dictionary";
import SiteHeader from "@/app/demo-1/_components/SiteHeader";
import SiteFooter from "@/app/demo-1/_components/SiteFooter";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const dir = localeDir[locale];

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${vazirmatn.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <SiteHeader locale={locale} dict={dict} />
        <main>{children}</main>
        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  );
}
