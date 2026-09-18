import Link from "next/link";
import Image from "next/image";
import SolarExchangeLight from "../demo-4/_components/SolarExchangeLight";

export default function Home() {
  return (
    <main className="demo-picker">
      <Image src="/demo-2/solar-field.jpg" alt="" fill priority sizes="100vw" className="picker-photo" />
      <div className="picker-shade" aria-hidden="true" />
      <SolarExchangeLight variant="hub" />
      <section className="picker-content">
        <span className="picker-kicker">TABESH ENERGY · COLLECTION</span>
        <h1>نمونه وب‌سایت‌ها</h1>
        <p>چهار مسیر طراحی برای معرفی راهکارهای انرژی خورشیدی.</p>
        <nav aria-label="انتخاب نمونه وب‌سایت">
          <Link href="/demo-1"><small>۰۱</small>دمو ۱ <b>↗</b></Link>
          <Link href="/demo-2"><small>۰۲</small>دمو ۲ <b>↗</b></Link>
          <Link href="/demo-3"><small>۰۳</small>دمو ۳ <b>↗</b></Link>
          <Link href="/demo-4"><small>۰۴</small>دمو ۴ <b>↗</b></Link>
        </nav>
      </section>
    </main>
  );
}
