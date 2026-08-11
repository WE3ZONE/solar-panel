import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).news.map((item) => ({ locale, slug: item.slug }))
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fa";
  const dict = getDictionary(locale);
  const item = dict.news.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <article className="section-y">
      <div className="container-x max-w-3xl">
        <Reveal>
          <Link
            href={`/${locale}/news`}
            className="text-sm font-bold text-ink/50 hover:text-ink"
          >
            {dict.newsDetail.back}
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs text-ink/45 tnum">
            <span>{item.date}</span>
            <span className="h-1 w-1 rounded-full bg-ink/25" />
            <span className="text-gold-2 font-semibold">{item.category}</span>
          </div>

          <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold leading-[1.3] text-ink">
            {item.title}
          </h1>
        </Reveal>

        <div className="mt-10 space-y-6 border-t hairline-dark pt-10">
          {item.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base md:text-lg leading-9 text-ink/75">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
