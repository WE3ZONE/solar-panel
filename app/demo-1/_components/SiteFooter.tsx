import Link from "next/link";
import Logo from "./Logo";
import type { Locale } from "@/app/demo-1/_lib/i18n/config";
import type { Dictionary } from "@/app/demo-1/_lib/i18n/types";

export default function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/demo-1/${locale}`;

  return (
    <footer className="relative overflow-hidden bg-ink text-paper grain">
      <div
        className="mesh-glow -bottom-40 start-1/4 h-96 w-96 opacity-20"
        style={{ background: "radial-gradient(circle, #F2A93B, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo dark locale={locale} />
          <p className="mt-5 max-w-xs text-sm leading-7 text-paper/55">
            {dict.footer.desc}
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-4">{dict.footer.quickLinks}</h3>
          <ul className="space-y-3 text-sm text-paper/70">
            <li><Link href={base} className="hover:text-paper">{dict.nav.home}</Link></li>
            <li><Link href={`${base}/news`} className="hover:text-paper">{dict.nav.news}</Link></li>
            <li><Link href={`${base}/about`} className="hover:text-paper">{dict.nav.about}</Link></li>
            <li><Link href={`${base}/contact`} className="hover:text-paper">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">{dict.footer.contactInfo}</h3>
          <ul className="space-y-3 text-sm text-paper/70">
            <li>{dict.footer.address}</li>
            <li dir="ltr" className="text-start">{dict.footer.phone}</li>
            <li dir="ltr" className="text-start">{dict.footer.email}</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">{dict.footer.tickerTitle}</h3>
          <p className="text-sm text-paper/70 leading-7 whitespace-pre-line">
            {dict.footer.tickerDesc}
          </p>
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/40">
          <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
          <p>{dict.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
