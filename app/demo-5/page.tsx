"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import DemoChooserBar from "../_components/DemoChooserBar";

const chapters = [
  { tag: "01 / SOLAR GENERATION", title: ["خورشید،", "جریانِ فردا."], text: "از نخستین تابش تا تولید برق پاک؛ انرژی را برای آینده‌ای روشن‌تر به جریان می‌اندازیم.", label: "تولید خورشیدی", stat: "۲۱۰", unit: "مگاوات ظرفیت تولید", position: "center" },
  { tag: "02 / GRID CONNECTION", title: ["انرژی پاک،", "در مقیاس زندگی."], text: "برق نیروگاه‌های خورشیدی، از مسیر شبکه سراسری به قلب صنعت و زندگی می‌رسد.", label: "اتصال به شبکه", stat: "۶", unit: "نیروگاه در یک مسیر", position: "30% center" },
  { tag: "03 / ENERGY EXCHANGE", title: ["قدرت خورشید،", "ارزشِ شفاف."], text: "برق تولیدی را در بورس انرژی عرضه می‌کنیم؛ پیوندی میان تولید پایدار و بازار شفاف.", label: "بورس انرژی", stat: "۱", unit: "مسیر شفاف برای عرضه", position: "70% center" },
];
const sectors = [
  { title: "نیروگاه خورشیدی", intro: "از ظرفیت زمین تا جریان برق. طراحی و بهره‌برداری با نگاهی دقیق به هر ساعت تابش.", labels: ["طراحی نیروگاه", "فناوری پنل‌ها", "پایش تولید", "بهره‌برداری"], values: [88, 76, 94, 82] },
  { title: "شبکه و زیرساخت", intro: "یک مسیر پیوسته برای انتقال انرژی؛ از خروجی نیروگاه تا اتصال مطمئن به شبکه سراسری.", labels: ["زیرساخت اتصال", "مدیریت توان", "پایش تجهیزات", "نگهداری شبکه"], values: [92, 81, 89, 73] },
  { title: "بازار انرژی", intro: "برق تولیدشده در مزرعهٔ تابش از طریق بورس انرژی برای فروش عرضه می‌شود.", labels: ["برنامه‌ریزی عرضه", "پایش بازار", "گزارش‌دهی", "مدیریت تولید"], values: [84, 93, 96, 79] },
];
const stories = [
  { tag: "تولید", title: "هر ردیف پنل، شروع یک جریان تازه", text: "نگاهی به مسیر تبدیل تابش خورشید به برق قابل استفاده در شبکه.", image: "panel-field.jpg" },
  { tag: "بازار انرژی", title: "از نیروگاه تا تابلوی بورس انرژی", text: "برق تولیدی پس از اتصال به شبکه، در بازار انرژی برای فروش عرضه می‌شود.", image: "grid.jpg" },
  { tag: "فناوری", title: "داده‌ها، چشم همیشه‌بیدار نیروگاه", text: "پایش پیوسته و نگهداری برنامه‌ریزی‌شده، برای تولیدی مطمئن‌تر.", image: "operations.jpg" },
];
function Arrow({ direction = "left" }: { direction?: "left" | "right" }) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={{ transform: direction === "right" ? "rotate(180deg)" : undefined }}><path d="M20 12H4m7-7-7 7 7 7" /></svg>; }
function Mark() { return <svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="15" stroke="currentColor" /><path d="M5 12h26M3 18h30M5 24h26" stroke="currentColor" strokeWidth="3" /></svg>; }
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) { const reduced = useReducedMotion(); return <motion.div className={className} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .8 }}>{children}</motion.div>; }

export default function DemoFive() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sector, setSector] = useState(0);
  const [story, setStory] = useState(0);
  const [article, setArticle] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const reduced = useReducedMotion();
  const hero = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const touch = useRef<number | null>(null);
  const closeArticle = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 160]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -90]);
  const change = (next: number) => setSlide((next + chapters.length) % chapters.length);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 65); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  useEffect(() => { if (paused || reduced || menu) return; const id = window.setInterval(() => setSlide(s => (s + 1) % 3), 8500); return () => clearInterval(id); }, [paused, reduced, menu, slide]);
  useEffect(() => { if (paused || reduced) video.current?.pause(); else video.current?.play().catch(() => {}); }, [paused, reduced]);
  useEffect(() => {
    if (article === null) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeArticle.current?.focus();
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") setArticle(null); if (event.key === "Tab") { event.preventDefault(); closeArticle.current?.focus(); } };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", key); previous?.focus(); };
  }, [article]);
  function moveStory(next: number) {
    const n = (next + stories.length) % stories.length;
    const gallery = track.current;
    if (!gallery) return;
    const card = gallery.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
    setStory(n);
    gallery.scrollTo({ left: -n * (card.getBoundingClientRect().width + gap), behavior: reduced ? "auto" : "smooth" });
  }
  const current = chapters[slide];
  return <div className="five"><DemoChooserBar />
    <header className={`five-header ${scrolled ? "floating" : ""}`}><a className="five-brand" href="#home"><Mark /><span>تابش<small>TABESH ENERGY</small></span></a><button className="five-menu" aria-expanded={menu} aria-controls="five-nav" onClick={() => setMenu(!menu)}>{menu ? "بستن ×" : "منو ☰"}</button><nav id="five-nav" className={menu ? "open" : ""}>{[["شرکت", "company"], ["نیروگاه", "technology"], ["مسیر تولید", "solutions"], ["بازار انرژی", "market"], ["روایت‌ها", "stories"]].map(([title, id]) => <a href={`#${id}`} key={id} onClick={() => setMenu(false)}>{title}</a>)}</nav><a href="#contact" className="five-header-cta">شروع گفت‌وگو <Arrow /></a></header>
    <main>
      <section ref={hero} id="home" className={`five-hero scene-${slide}`} aria-roledescription="اسلایدر" aria-label="از خورشید تا بازار انرژی" onTouchStart={e => { touch.current = e.touches[0].clientX; }} onTouchEnd={e => { if (touch.current === null) return; const delta = e.changedTouches[0].clientX - touch.current; if (Math.abs(delta) > 55) change(slide + (delta > 0 ? 1 : -1)); touch.current = null; }}>
        <motion.div className="five-hero-media" style={{ y: mediaY }}><video ref={video} autoPlay muted loop playsInline preload="auto" poster="/demo-5/desert-pv-panels-poster.jpg" style={{ objectPosition: current.position }}><source src="/demo-5/desert-pv-panels.mp4" type="video/mp4" /></video></motion.div><div className="five-hero-shade" />
        <div className="five-hero-top"><span>انرژی برای نسل بعد</span><span dir="ltr">EST. FOR A BRIGHTER TOMORROW</span></div>
        <motion.div className="five-hero-title" style={{ y: titleY }}><AnimatePresence mode="wait"><motion.div key={slide} initial={{ opacity: 0, y: reduced ? 0 : 45, filter: reduced ? "none" : "blur(9px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: reduced ? 0 : -30 }} transition={{ duration: .65 }}><span className="five-micro" dir="ltr">{current.tag}</span><h1>{current.title[0]}<span>{current.title[1]}</span></h1></motion.div></AnimatePresence></motion.div>
        <div className="five-hero-bottom"><div className="five-hero-description"><p>{current.text}</p><a href="#company">مسیر ما را کشف کنید <Arrow /></a></div><div className="five-hero-stat"><strong>{current.stat}</strong><span>{current.unit}<small>اطلاعات نمایشی</small></span></div><div className="five-controls"><button aria-label="اسلاید قبلی" onClick={() => change(slide - 1)}><Arrow direction="right" /></button><span dir="ltr">0{slide + 1} / 03</span><button aria-label="اسلاید بعدی" onClick={() => change(slide + 1)}><Arrow /></button><button className="five-pause" onClick={() => setPaused(!paused)} aria-label={paused ? "پخش حرکت و ویدیو" : "توقف حرکت و ویدیو"}>{paused || reduced ? "▷" : "Ⅱ"}</button></div></div>
        <div className="five-chapters">{chapters.map((chapter, i) => <button key={chapter.tag} onClick={() => change(i)} aria-pressed={slide === i}><span>0{i + 1}</span>{chapter.label}<i>{slide === i && <motion.b key={`${slide}-${paused}`} initial={{ scaleX: 0 }} animate={{ scaleX: paused || reduced ? 0 : 1 }} transition={{ duration: 8.5, ease: "linear" }} />}</i></button>)}</div>
      </section>
      <section id="company" className="five-company five-wrap"><Reveal className="five-intro"><span className="five-kicker">۰۱ — درباره تابش</span><h2>آینده، منتظر نمی‌ماند.<br />ما انرژی آن را <em>تولید می‌کنیم.</em></h2><a href="#technology" className="five-link">از ایده تا جریان برق <Arrow /></a></Reveal><Reveal className="five-company-summary"><p>تابش انرژی، مالک و بهره‌بردار مزرعه خورشیدی است. برق را از خورشید تولید می‌کنیم، به شبکه می‌رسانیم و در بورس انرژی عرضه می‌کنیم.</p><span className="five-micro" dir="ltr">SOLAR FARM → NATIONAL GRID → ENERGY EXCHANGE</span></Reveal></section>
      <section id="technology" className="five-technology five-wrap"><Reveal className="five-section-head"><div><span className="five-kicker">۰۲ — زندگی در نیروگاه</span><h2>یک مزرعه.<br /><em>هزاران ساعت انرژی.</em></h2></div><p>تمرکز ما روشن است: بهره‌برداری دقیق از نیروگاه برای تولید پیوستهٔ برق خورشیدی.</p></Reveal><div className="five-plant-grid"><Reveal className="five-plant-photo"><img src="/demo-5/panel-field.jpg" alt="پنل‌های فتوولتائیک مزرعه خورشیدی" loading="lazy"/><div><span dir="ltr">POWERED BY SUNLIGHT</span><h3>از نور، زندگی می‌سازیم.</h3></div></Reveal><div className="five-plant-details">{[["۰۱","تولید برق خورشیدی","دریافت تابش و تبدیل آن به برق در مزرعهٔ خورشیدی."],["۰۲","بهره‌برداری و پایش","رسیدگی به تجهیزات و رصد روزانهٔ عملکرد نیروگاه."],["۰۳","عرضه در بورس انرژی","تزریق برق تولیدی به شبکه و عرضه برای فروش در بورس انرژی."]].map(([n,title,text])=><Reveal className="five-plant-row" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><Arrow/></Reveal>)}<a className="five-link" href="#market">مسیر برق تولیدی <Arrow/></a></div></div></section>
      <section id="solutions" className="five-market"><div className="five-wrap"><Reveal className="five-market-head"><h2>یک زنجیرهٔ پیوسته،<br />از تابش تا ارزش.</h2><p>انرژی پاک زمانی اثرگذار می‌شود که تولید، زیرساخت و بازار در کنار هم کار کنند.</p></Reveal><div className="five-tabs" role="tablist" aria-label="حوزه فعالیت">{sectors.map((s, i) => <button role="tab" id={`sector-${i}`} aria-selected={sector === i} aria-controls="sector-panel" onClick={() => setSector(i)} onKeyDown={e => { if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); const n = (i + (e.key === "ArrowLeft" ? 1 : 2)) % 3; setSector(n); document.getElementById(`sector-${n}`)?.focus(); } }} tabIndex={sector === i ? 0 : -1} key={s.title}>{s.title}</button>)}</div><div className="five-chart" id="sector-panel" role="tabpanel" aria-labelledby={`sector-${sector}`}><div className="five-chart-head"><span>{sectors[sector].title}</span><span>مسیر فعالیت نیروگاه</span></div><AnimatePresence mode="wait"><motion.div key={sector} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><p>{sectors[sector].intro}</p>{sectors[sector].labels.map((label, i) => <div className="five-bar" key={label}><span>{label}</span><div><motion.i initial={{ width: reduced ? `${sectors[sector].values[i]}%` : 0 }} whileInView={{ width: `${sectors[sector].values[i]}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: i * .12 }} /></div><small>{sectors[sector].values[i]}%</small></div>)}</motion.div></AnimatePresence><small className="five-chart-note">نمودار مفهومی برای نمایش طراحی؛ دادهٔ واقعی عملکرد نیست.</small></div></div></section>
      <section id="market" className="five-exchange five-wrap"><Reveal><span className="five-kicker">۰۳ — بورس انرژی</span><h2>برق پاک.<br /><em>ارزش روشن.</em></h2></Reveal><Reveal><p>ما در تابش برق خورشیدی تولید می‌کنیم. برق تولیدشده در نیروگاه‌ها به شبکه سراسری تزریق و از طریق بورس انرژی برای فروش عرضه می‌شود.</p><div className="five-flow"><span>تولید</span><Arrow /><span>شبکه</span><Arrow /><span>بورس انرژی</span></div><a href="#contact" className="five-link">گفت‌وگو درباره همکاری <Arrow /></a></Reveal></section>
      <section id="stories" className="five-stories"><div className="five-wrap"><Reveal className="five-stories-head"><div><span className="five-kicker">۰۴ — روایت‌های انرژی</span><h2>از دل نیروگاه،<br />برای فردای روشن‌تر.</h2></div><div className="five-story-controls"><button aria-label="روایت قبلی" onClick={() => moveStory(story - 1)}><Arrow direction="right" /></button><button aria-label="روایت بعدی" onClick={() => moveStory(story + 1)}><Arrow /></button></div></Reveal></div><div className="five-story-track" ref={track} onScroll={() => { if (!track.current) return; const right = track.current.getBoundingClientRect().right; let closest = 0; let distance = Infinity; Array.from(track.current.children).forEach((el, i) => { const d = Math.abs(el.getBoundingClientRect().right - right); if (d < distance) { distance = d; closest = i; } }); setStory(closest); }}>{stories.map((s, i) => <button className="five-story" key={s.title} onClick={() => setArticle(i)}><div><img src={`/demo-5/${s.image}`} alt="" loading="lazy" /><span>{s.tag}</span><b><Arrow /></b></div><small>یادداشت انرژی / ۰{i + 1}</small><h3>{s.title}</h3><p>{s.text}</p></button>)}</div><div className="five-story-dots">{stories.map((s, i) => <button key={s.title} aria-label={`نمایش روایت ${i + 1}`} aria-pressed={story === i} onClick={() => moveStory(i)} />)}</div></section>
      <section id="contact" className="five-contact five-wrap"><Reveal><span className="five-kicker">آینده را با هم بسازیم</span><h2>گفت‌وگو،<br />نقطهٔ شروع است.</h2><p>برای همکاری در تولید و عرضه برق خورشیدی با ما در ارتباط باشید.</p></Reveal><form onSubmit={e => { e.preventDefault(); setSent(true); }}><label>نام شما<input name="name" autoComplete="name" required placeholder="نام و نام خانوادگی" /></label><label>ایمیل<input name="email" autoComplete="email" type="email" required placeholder="you@company.com" dir="ltr" /></label><label>موضوع گفت‌وگو<select name="topic"><option>عرضه برق در بورس انرژی</option><option>توسعه نیروگاه خورشیدی</option><option>همکاری صنعتی</option></select></label><label>پیام شما<textarea name="message" required rows={3} placeholder="از ایده یا نیازتان بگویید…" /></label><button className="five-submit" type="submit">ثبت درخواست نمایشی <Arrow /></button><small role="status">{sent ? "درخواست آزمایشی تکمیل شد؛ اطلاعاتی ارسال نشده است." : "این فرم نمایشی است و اطلاعاتی ارسال نمی‌کند."}</small></form></section>
    </main><footer className="five-footer"><div className="five-footer-lead"><span className="five-kicker">از خورشید، برای فردا</span><h2>انرژی پاک.<br/><em>آینده‌ای در جریان.</em></h2><a href="#contact">با تابش در ارتباط باشید <Arrow/></a></div><div className="five-footer-grid"><a className="five-brand" href="#home"><Mark/><span>تابش<small>TABESH ENERGY</small></span></a><p>تولید برق در مزرعهٔ خورشیدی.<br/>عرضهٔ شفاف در بورس انرژی.</p><nav aria-label="پیوندهای پایین صفحه"><a href="#company">درباره تابش</a><a href="#technology">نیروگاه ما</a><a href="#market">بورس انرژی</a><a href="#stories">روایت‌های انرژی</a></nav><a className="five-to-top" href="#home">بازگشت به بالا ↑</a></div><div className="five-footer-bottom"><span>© تابش انرژی · نمونه طراحی ۰۵</span><a href="/">انتخاب دموها ↗</a></div></footer>
    <AnimatePresence>{article !== null && <motion.div className="five-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setArticle(null)}><section className="five-modal" role="dialog" aria-modal="true" aria-labelledby="five-article-title" onClick={e => e.stopPropagation()}><button ref={closeArticle} onClick={() => setArticle(null)} aria-label="بستن مطلب">×</button><img src={`/demo-5/${stories[article].image}`} alt="نیروگاه خورشیدی" /><span className="five-kicker">{stories[article].tag}</span><h2 id="five-article-title">{stories[article].title}</h2><p>{stories[article].text}</p><p>در تابش، تولید پایدار با پایش تجهیزات و برنامه‌ریزی بهره‌برداری همراه می‌شود. انرژی تولیدی پس از تزریق به شبکه، از مسیر بورس انرژی به بازار می‌رسد.</p><small>یادداشت نمایشی برای معرفی مسیر فعالیت شرکت.</small></section></motion.div>}</AnimatePresence>
  </div>;
}
