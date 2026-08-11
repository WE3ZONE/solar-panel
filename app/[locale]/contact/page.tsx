import Reveal from "@/components/Reveal";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fa";
  const dict = getDictionary(locale);
  const d = dict.contactPage;

  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-ink max-w-2xl">
            {d.title}
          </h1>
          <p className="mt-4 max-w-xl text-ink/60 leading-8">{d.description}</p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.1} className="space-y-8">
            {d.info.map((i) => (
              <div key={i.label} className="border-t hairline-dark pt-4">
                <p className="text-xs text-ink/45">{i.label}</p>
                <p
                  dir={i.dir}
                  className={`mt-1 font-semibold text-ink ${
                    i.dir === "ltr" ? "text-start" : ""
                  }`}
                >
                  {i.value}
                </p>
              </div>
            ))}

            <div className="border-t hairline-dark pt-4">
              <p className="text-xs text-ink/45">{d.hoursLabel}</p>
              <p className="mt-1 font-semibold text-ink">{d.hoursValue}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form className="space-y-5" aria-label="contact form demo">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-ink/60" htmlFor="name">
                    {d.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-2 w-full rounded-lg border hairline-dark bg-paper-2/40 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-ink/60" htmlFor="email">
                    {d.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    dir="ltr"
                    className="mt-2 w-full rounded-lg border hairline-dark bg-paper-2/40 px-4 py-3 text-sm outline-none transition-colors focus:border-gold text-start"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-ink/60" htmlFor="subject">
                  {d.form.subject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-2 w-full rounded-lg border hairline-dark bg-paper-2/40 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink/60" htmlFor="message">
                  {d.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border hairline-dark bg-paper-2/40 px-4 py-3 text-sm outline-none transition-colors focus:border-gold resize-none"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-transform hover:scale-[1.02] hover:bg-ink-2"
              >
                {d.form.submit}
              </button>
              <p className="text-xs text-ink/40">{d.form.disclaimer}</p>
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 h-64 rounded-2xl border hairline-dark bg-paper-2/50 flex items-center justify-center">
            <p className="text-sm text-ink/40">{d.mapPlaceholder}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
