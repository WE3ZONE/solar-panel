import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fa";
  const dict = getDictionary(locale);
  const d = dict.aboutPage;

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper section-y grain">
        <div
          className="mesh-glow -top-24 end-1/4 h-96 w-96 opacity-25 animate-drift"
          style={{ background: "radial-gradient(circle, #F2A93B, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow">{d.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-[1.25] max-w-3xl">
              {d.title}
            </h1>
            <p className="mt-6 max-w-2xl text-paper/65 leading-8">
              {d.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow={d.valuesEyebrow} title={d.valuesTitle} />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {d.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group border-t-2 border-gold pt-6 transition-transform duration-300 hover:-translate-y-1.5">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper-2/60">
        <div className="container-x">
          <SectionHeading eyebrow={d.timelineEyebrow} title={d.timelineTitle} />

          <div className="mt-14 max-w-3xl">
            {d.timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="flex gap-6 md:gap-10 border-t hairline-dark py-6 first:border-t-0">
                  <span className="tnum shrink-0 w-16 font-display text-lg font-extrabold text-gold-2">
                    {t.year}
                  </span>
                  <p className="text-sm md:text-base leading-8 text-ink/70">
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 md:grid-cols-4 md:gap-6">
          {d.statsRepeat.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-t hairline-dark pt-5">
                <p className="tnum font-display text-3xl font-extrabold text-ink">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-ink/55">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
