import NewsCard from "@/components/NewsCard";
import Reveal from "@/components/Reveal";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fa";
  const dict = getDictionary(locale);

  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{dict.newsPage.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-ink">
            {dict.newsPage.title}
          </h1>
          <p className="mt-4 max-w-xl text-ink/60 leading-8">
            {dict.newsPage.description}
          </p>
        </Reveal>

        <div className="mt-14 max-w-3xl">
          {dict.news.map((item, i) => (
            <NewsCard
              key={item.slug}
              item={item}
              locale={locale}
              readMore={dict.newsCard.readMore}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
