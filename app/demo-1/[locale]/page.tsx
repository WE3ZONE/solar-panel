import Link from "next/link";
import HeroSlider from "@/app/demo-1/_components/HeroSlider";
import StatStrip from "@/app/demo-1/_components/StatStrip";
import ExchangeWidget from "@/app/demo-1/_components/ExchangeWidget";
import SectionHeading from "@/app/demo-1/_components/SectionHeading";
import NewsCard from "@/app/demo-1/_components/NewsCard";
import Reveal from "@/app/demo-1/_components/Reveal";
import { isLocale, type Locale } from "@/app/demo-1/_lib/i18n/config";
import { getDictionary } from "@/app/demo-1/_lib/i18n/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fa";
  const dict = getDictionary(locale);
  const base = `/demo-1/${locale}`;

  return (
    <>
      <HeroSlider locale={locale} dict={dict} />
      <StatStrip dict={dict} />
      <ExchangeWidget dict={dict} />

      {/* About preview */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow={dict.aboutPreview.eyebrow}
            title={dict.aboutPreview.title}
            description={dict.aboutPreview.description}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {dict.aboutPreview.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-paper-2/55 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl">
                  <span className="absolute -end-5 -top-9 font-display text-8xl font-extrabold text-gold/[.07]" aria-hidden="true">{p.num}</span>
                  <span className="tnum inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-gold">
                    {p.num}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link
              href={`${base}/about`}
              className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-ink border-b-2 border-gold pb-1"
            >
              {dict.aboutPreview.cta}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* News preview */}
      <section className="section-y bg-paper-2/60">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading
              eyebrow={dict.newsPreview.eyebrow}
              title={dict.newsPreview.title}
            />
            <Link
              href={`${base}/news`}
              className="text-sm font-bold text-ink border-b-2 border-gold pb-1"
            >
              {dict.newsPreview.viewAll}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.16fr_.84fr]">
            <NewsCard
              item={dict.news[0]}
              locale={locale}
              readMore={dict.newsCard.readMore}
              index={0}
              variant="featured"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {dict.news.slice(1, 3).map((item, i) => (
                <NewsCard
                  key={item.slug}
                  item={item}
                  locale={locale}
                  readMore={dict.newsCard.readMore}
                  index={i + 1}
                  variant="card"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
