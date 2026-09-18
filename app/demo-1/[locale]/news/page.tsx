import NewsCard from "@/app/demo-1/_components/NewsCard";
import Reveal from "@/app/demo-1/_components/Reveal";
import { isLocale, type Locale } from "@/app/demo-1/_lib/i18n/config";
import { getDictionary } from "@/app/demo-1/_lib/i18n/get-dictionary";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fa";
  const dict = getDictionary(locale);
  const [featured, ...rest] = dict.news;

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

        {featured && (
          <div className="mt-14">
            <NewsCard
              item={featured}
              locale={locale}
              readMore={dict.newsCard.readMore}
              index={0}
              variant="featured"
            />
          </div>
        )}

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
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
    </section>
  );
}
