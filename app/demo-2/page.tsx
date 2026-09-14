"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Sun({className = ""}: {className?: string}) {
  return <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5"/>{Array.from({length: 12}, (_, i) => <path key={i} d="M20 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${i * 30} 20 20)`}/>)}</svg>;
}
type IconName = "panel" | "grid" | "activity" | "leaf" | "shield" | "arrow" | "left" | "right" | "up" | "menu" | "close" | "plus";
function Icon({name}: {name: IconName}) {
 const paths: Record<IconName, React.ReactNode> = {
  panel: <><path d="M5 5h14l2 12H3L5 5ZM4 11h16M9 5l-1 12m7-12 1 12M12 17v4m-4 0h8"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  activity: <><rect x="2" y="3" width="20" height="15" rx="2"/><path d="M5 11h3l2-4 4 8 2-4h3M8 22h8m-4-4v4"/></>,
  leaf: <><path d="M20 3C11 2 3 6 4 13c1 7 11 8 14 1 2-4 2-8 2-11ZM4 21 15 10"/></>,
  shield: <><path d="m12 2 8 3v6c0 5-4 8-8 11-4-3-8-6-8-11V5l8-3Z"/><path d="m8 12 3 3 5-6"/></>,
  arrow: <path d="M18 18 6 6m0 10V6h10"/>,
  left: <path d="M20 12H4m6-6-6 6 6 6"/>,
  right: <path d="M4 12h16m-6-6 6 6-6 6"/>,
  up: <path d="M12 20V4m-6 6 6-6 6 6"/>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  close: <path d="m6 6 12 12M6 18 18 6"/>,
  plus: <path d="M12 5v14M5 12h14"/>,
 };
 return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
function Arrow(){return <Icon name="arrow"/>}
function Label({children}: {children: React.ReactNode}) {return <span className="eyebrow"><i/>{children}</span>}
const features = [
  ["۰۱", "تولید با بازدهی بالا", "پنل‌های دوطرفه و طراحی مهندسی برای استفاده بهتر از هر ساعت تابش خورشید."],
  ["۰۲", "انرژی در مقیاس بزرگ", "توسعه نیروگاه‌هایی که برق پاک را به بخش بزرگ‌تری از صنعت می‌رسانند."],
  ["۰۳", "پایش هوشمند و پیوسته", "بررسی عملکرد تجهیزات و تولید نیروگاه‌ها برای بهره‌برداری مطمئن و پایدار."],
  ["۰۴", "نگاهی به فردای زمین", "انرژی تجدیدپذیر، مصرف مسئولانه منابع و مسیری به سوی آینده‌ای کم‌کربن."],
];
const projects = [
  {title:"نیروگاه خورشیدی بختران", tag:"مقیاس صنعتی", location:"کرمان", image:"solar-field.jpg", text:"توسعه تولید برق پاک در قلب یکی از آفتابی‌ترین مناطق ایران.", detail:"این پروژه نمایشی، رویکرد تابش به احداث نیروگاه‌های بزرگ و اتصال مستقیم به شبکه سراسری را معرفی می‌کند."},
  {title:"ردیاب‌های هوشمند خورشیدی", tag:"فناوری پیشرفته", location:"یزد", image:"engineers.jpg", text:"همراه با حرکت خورشید، برای استفاده بهتر از ظرفیت هر روز.", detail:"سامانه ردیابی، زاویه پنل‌ها را متناسب با موقعیت خورشید تنظیم می‌کند. انتخاب تجهیزات در هر پروژه بر اساس مطالعات فنی انجام می‌شود."},
  {title:"توسعه ظرفیت تولید", tag:"انرژی برای آینده", location:"اصفهان", image:"solar-field.jpg", text:"یک قدم دیگر برای تأمین پایدار انرژی موردنیاز صنایع.", detail:"مطالعات اتصال به شبکه، ارزیابی زمین و طراحی مهندسی، نخستین گام‌های توسعه ظرفیت جدید هستند."},
  {title:"بهره‌برداری و پایش نیروگاه", tag:"عملکرد هوشمند", location:"فارس", image:"engineers.jpg", text:"از نخستین تابش تا آخرین ساعت روز، عملکرد زیر نظر است.", detail:"پایش تولید، بازدید تجهیزات و نگهداری برنامه‌ریزی‌شده به کاهش توقف‌های ناخواسته کمک می‌کند."},
];
const steps = [
 ["شناخت فرصت، پیش از هر تصمیم", "شرایط زمین، میزان تابش و امکان اتصال به شبکه بررسی می‌شوند تا مسیر توسعه از ابتدا روشن باشد."],
 ["طراحی دقیق، متناسب با پروژه", "تجهیزات و آرایش نیروگاه بر اساس شرایط محل و اهداف تولید انتخاب می‌شوند."],
 ["اجرا و اتصال به شبکه", "از نصب تجهیزات تا آزمون‌های فنی، مراحل اجرا با نظارت مهندسی دنبال می‌شوند."],
 ["تولید پایدار، پایش مداوم", "بهره‌برداری، نگهداری و بررسی داده‌های تولید در تمام عمر نیروگاه ادامه دارد."],
];
const faqs = [
 ["فعالیت اصلی تابش انرژی گستر چیست؟", "طراحی، توسعه و بهره‌برداری از نیروگاه‌های خورشیدی و عرضه برق تولیدشده به شبکه سراسری."],
 ["برق تولیدشده چگونه عرضه می‌شود؟", "مدل معرفی‌شده در این دمو، عرضه برق نیروگاه‌ها از طریق بورس انرژی ایران است. جزئیات هر همکاری نیازمند بررسی و توافق جداگانه است."],
 ["آیا پنل‌ها در روزهای ابری هم برق تولید می‌کنند؟", "بله، پنل‌های خورشیدی با نور پراکنده نیز کار می‌کنند؛ اما میزان تولید به شدت تابش و شرایط جوی وابسته است."],
 ["چطور می‌توان درباره همکاری گفت‌وگو کرد؟", "از دکمه درخواست گفت‌وگو استفاده کنید و موضوع همکاری را بنویسید. فرم این نسخه صرفاً نمایشی است و اطلاعاتی ارسال نمی‌کند."],
 ["آیا اطلاعات این سایت واقعی هستند؟", "این وب‌سایت یک نمونه طراحی است. آمار، پروژه‌ها و اطلاعات شرکت برای نمایش رابط کاربری ارائه شده‌اند و گزارش رسمی عملکرد نیستند."],
];
export default function DemoTwo() {
 const [menu, setMenu] = useState(false);
 const [headerVisible, setHeaderVisible] = useState(true);
 const [headerScrolled, setHeaderScrolled] = useState(false);
 const [slide, setSlide] = useState(0);
 const [project, setProject] = useState<number|null>(null);
 const [contact, setContact] = useState(false);
 const [sent, setSent] = useState(false);
 const slides = [ {title:<>انرژی پاک،<br/>برای فردایی روشن‌تر.</>, image:"engineers.jpg", caption:"از تابش امروز، تا انرژی فردا"}, {title:<>قدرت خورشید،<br/>در مقیاس یک آینده.</>, image:"solar-field.jpg", caption:"تولید پایدار، نگاه بلندمدت"} ];
 const modalOpen = project !== null || contact;
 useEffect(() => {
   if (!modalOpen) return;
   const previousFocus = document.activeElement as HTMLElement | null;
   const previousOverflow = document.body.style.overflow;
   document.body.style.overflow = "hidden";
   return () => { document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
 }, [modalOpen]);
 useEffect(() => {
   let previous = Math.max(0, window.scrollY);
   let distance = 0;
   let direction = 0;
   const onScroll = () => {
     const y = Math.max(0, window.scrollY);
     const delta = y - previous;
     previous = y;
     setHeaderScrolled(y > 60);
     if (y < 80) { setHeaderVisible(true); distance = 0; return; }
     const nextDirection = Math.sign(delta);
     if (nextDirection !== direction) distance = 0;
     direction = nextDirection;
     distance += Math.abs(delta);
     if (distance > 12) { setHeaderVisible(delta < 0); distance = 0; }
   };
   window.addEventListener("scroll", onScroll, { passive: true });
   onScroll();
   return () => window.removeEventListener("scroll", onScroll);
 }, []);
 const nav = [["خانه","home"],["درباره ما","about"],["قابلیت‌ها","features"],["پروژه‌ها","projects"],["مسیر همکاری","process"],["پرسش‌ها","faq"]];
 return <div className="solar-shell">
   <header className={`header ${headerScrolled ? "header-scrolled" : ""} ${headerVisible || menu ? "" : "header-hidden"}`} onFocusCapture={()=>setHeaderVisible(true)}>
    <a href="#home" className="brand"><Sun/><span>تابش<small>انرژی گستر</small></span></a>
    <button className="menu-toggle" aria-expanded={menu} aria-controls="demo-navigation" onClick={()=>setMenu(!menu)}>{menu ? "بستن" : "منو"}<Icon name={menu ? "close" : "menu"}/></button>
    <nav id="demo-navigation" className={menu ? "navigation open" : "navigation"}>{nav.map(([name,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{name}</a>)}</nav>
    <button className="pill white header-contact" onClick={()=>setContact(true)}>تماس با ما <Arrow/></button>
   </header>
  <section className="hero photo-section" id="home">
   <Image key={slide} src={`/demo-2/${slides[slide].image}`} alt="تیم مهندسی و پنل‌های یک نیروگاه خورشیدی" fill priority sizes="100vw" className="cover hero-photo"/>
   <div className="hero-shade"/>

   <div className="hero-copy"><span className="hero-kicker">آینده با انرژی پاک آغاز می‌شود</span><h1>{slides[slide].title}</h1><p>نور خورشید را به نیرویی ماندگار برای زندگی،<br/>صنعت و زمین تبدیل می‌کنیم.</p></div>
   <div className="hero-bottom"><div className="hero-benefits">{["تولید انرژی تجدیدپذیر","بهره‌برداری مطمئن و پایدار","پایش هوشمند نیروگاه‌ها"].map((x,i)=><div key={x}><span className="mini-icon"><Icon name={(["panel","shield","activity"] as const)[i]}/></span><span>{x}<small>{["انرژی امروز، با نگاه به فردا","مهندسی در خدمت عملکرد","هر روز، در هر ساعت تابش"][i]}</small></span></div>)}</div><div className="hero-aside"><div className="slide-controls"><button aria-label="تصویر قبلی" onClick={()=>setSlide((slide+1)%2)}><Icon name="right"/></button><span>{["۰۱", "۰۲"][slide]} / ۰۲</span><button aria-label="تصویر بعدی" onClick={()=>setSlide((slide+1)%2)}><Icon name="left"/></button></div><a href="#process" className="hero-card"><div className="thumb"><Image src="/demo-2/solar-field.jpg" alt="نمای نیروگاه خورشیدی" fill sizes="150px" className="cover"/></div><span><strong>{slides[slide].caption}</strong><small>با مسیر تولید انرژی آشنا شوید.</small><b>بیشتر بدانید <Arrow/></b></span></a></div></div>
  </section>
  <section className="about section-grid" id="about"><Label>درباره تابش</Label><div><h2>ما به آینده‌ای باور داریم که انرژی آن از خورشید می‌آید. <span>با فناوری دقیق و نگاهی مسئولانه، این آینده را از امروز می‌سازیم.</span></h2><p className="muted">تابش انرژی گستر، توسعه‌دهنده و بهره‌بردار نیروگاه‌های خورشیدی؛ از طراحی و ساخت تا تولید و عرضه برق پاک در شبکه سراسری.</p><div className="stats">{[["۲۱۰","مگاوات ظرفیت نصب‌شده"],["۴۸۰","گیگاوات‌ساعت تولید سالانه"],["۱۹۰","هزار تن کاهش انتشار کربن"],["۶","نیروگاه در حال بهره‌برداری"]].map(([v,l])=><div key={v}><strong>{v}</strong><span>{l}</span></div>)}</div><small className="data-note">آمار نمایشی برای معرفی طرح وب‌سایت</small></div></section>
  <section className="features photo-section" id="features"><Image src="/demo-2/solar-field.jpg" alt="ردیف پنل‌های خورشیدی زیر آسمان آبی" fill sizes="100vw" className="cover"/><div className="photo-shade"/><div className="feature-heading"><div><Label>قابلیت‌های ما</Label><h2>فناوری هوشمند.<br/>تأثیری ماندگار.</h2></div><div><p>هر جزئیات، برای تولید بهتر.<br/>هر تصمیم، برای آینده‌ای پایدارتر.</p><a className="pill white" href="#process">مسیر ما را بشناسید <Arrow/></a></div></div><div className="feature-grid">{features.map(([n,t,d],i)=><article key={n}><Icon name={(["panel","grid","activity","leaf"] as const)[i]}/><div><h3>{t}</h3><p>{d}</p></div><span className="feature-number">{n}</span></article>)}</div></section>
  <section className="projects" id="projects"><div className="section-heading"><Label>پروژه‌ها</Label><h2>جایی که خورشید، به آینده وصل می‌شود.</h2><p className="muted">نگاهی به مسیر توسعه و فناوری در نیروگاه‌های تابش.<br/>از گستره زمین تا شبکه‌ای از انرژی پاک.</p></div><div className="project-grid">{projects.map((p,i)=><button className={`project-card project-${i}`} key={p.title} onClick={()=>setProject(i)} aria-label={`جزئیات ${p.title}`}><Image src={`/demo-2/${p.image}`} alt={p.title} fill sizes="(max-width: 650px) 90vw, 40vw" className="cover"/><span className="project-tag">{p.tag}</span><div className="project-caption"><span className="project-location">{p.location} / تابش انرژی گستر</span><h3>{p.title}</h3><p>{p.text}</p></div><span className="round-arrow"><Arrow/></span></button>)}</div><button className="pill dark" onClick={()=>setContact(true)}>گفت‌وگو درباره همکاری <Arrow/></button></section>
  <section className="process" id="process"><div className="process-copy"><Label>مسیر همکاری</Label><h2>از نخستین تابش،<br/>تا یک جریان ماندگار.</h2><p className="muted">انرژی پاک، حاصل یک مسیر دقیق است.<br/>ما در هر مرحله، به قدم بعدی فکر می‌کنیم.</p><div className="steps">{steps.map(([t,d],i)=><details key={t} name="process" open={i===0}><summary><span>{["۰۱", "۰۲", "۰۳", "۰۴"][i]}</span>{t}<b><Icon name="plus"/></b></summary><p>{d}</p></details>)}</div></div><div className="process-image photo-section"><Image src="/demo-2/engineers.jpg" alt="همکاری مهندسان برای نصب پنل خورشیدی" fill sizes="(max-width: 650px) 90vw, 50vw" className="cover"/><div className="photo-shade"/><Sun className="large-sun"/><h2>نیروی خورشید.<br/>حاصل همکاری.</h2><span>با هم، برای فردایی روشن‌تر.</span></div></section>
  <section className="vision section-grid"><div><Label>نگاه ما</Label><h2>انرژی بهتر،<br/>زندگی روشن‌تر.</h2></div><div className="vision-right"><p className="muted">پایداری برای ما یک مقصد دور نیست؛ در شیوه طراحی، انتخاب فناوری و بهره‌برداری روزانه نیروگاه‌ها جریان دارد.</p><div className="quote-card"><div className="quote-image"><Image src="/demo-2/solar-field.jpg" alt="انرژی پاک برای آینده" fill sizes="200px" className="cover"/></div><blockquote><span className="quote-mark">“</span><p>هر پنل، فرصتی است برای ساختن آینده‌ای که انرژی آن پاک‌تر و دسترسی به آن پایدارتر باشد.</p><footer><span className="avatar"><Sun/></span><span>تیم تابش انرژی گستر<small>نگاه مشترک ما به آینده انرژی</small></span></footer></blockquote></div></div></section>
  <section className="faq" id="faq"><Label>پرسش‌های متداول</Label><h2>پاسخ‌های روشن، برای انتخابی آگاهانه.</h2><p className="muted">آنچه می‌خواهید درباره تابش و انرژی خورشیدی بدانید.</p><div className="faq-list">{faqs.map(([q,a])=><details name="faq" key={q}><summary>{q}<span><Icon name="plus"/></span></summary><p>{a}</p></details>)}</div><small>پرسش دیگری دارید؟</small><button className="pill dark" onClick={()=>setContact(true)}>با ما گفت‌وگو کنید <Arrow/></button></section>
  <footer className="footer"><div className="footer-photo photo-section"><Image src="/demo-2/solar-field.jpg" alt="" fill sizes="100vw" className="cover"/><div className="footer-shade"/><a href="#home" className="brand"><Sun/><span>تابش<small>انرژی گستر</small></span></a><p>آینده روشن است.<br/>وقتی انرژی آن از خورشید می‌آید.</p></div><div className="footer-grid"><div className="footer-intro"><h3>گفت‌وگو، شروع یک آینده تازه است.</h3><p>برای آشنایی بیشتر با مسیر فعالیت و فرصت‌های همکاری،<br/>با تیم تابش در ارتباط باشید.</p><button className="pill white" onClick={()=>setContact(true)}>درخواست گفت‌وگو <Arrow/></button></div><div><h4>دسترسی سریع</h4><a href="#about">درباره تابش</a><a href="#projects">پروژه‌ها</a><a href="#process">مسیر همکاری</a><a href="#faq">پرسش‌های متداول</a></div><div><h4>انرژی برای فردا</h4><a href="#features">فناوری و قابلیت‌ها</a><a href="#about">تولید پایدار</a><Link href="/">انتخاب دموها <Arrow/></Link></div></div><div className="footer-bottom"><span>© ۲۰۲۶ تابش انرژی گستر</span><span>نسخه نمایشی · اطلاعات و پروژه‌ها نمونه هستند.</span><a href="#home">بازگشت به بالا <Icon name="up"/></a></div><div className="wordmark" dir="ltr" aria-hidden="true">Tabesh</div></footer>
  {(project!==null || contact) && <div className="modal-backdrop" onClick={()=>{setProject(null);setContact(false);setSent(false);}}><dialog open aria-modal="true" aria-labelledby="dialog-title" className="modal" ref={node=>node?.focus()} tabIndex={-1} onKeyDown={e=>{if(e.key==="Escape"){setProject(null);setContact(false);setSent(false);} if(e.key==="Tab"){const els=e.currentTarget.querySelectorAll<HTMLElement>('button,input,textarea'); const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}} onClick={e=>e.stopPropagation()}><button className="modal-close" aria-label="بستن" onClick={()=>{setProject(null);setContact(false);setSent(false);}}><Icon name="close"/></button>{project!==null ? <><Label>معرفی پروژه · نمونه نمایشی</Label><h2 id="dialog-title">{projects[project].title}</h2><p>{projects[project].detail}</p><button className="pill dark" onClick={()=>{setProject(null);setContact(true);}}>درخواست گفت‌وگو <Arrow/></button></> : <><Label>ارتباط با تابش</Label><h2 id="dialog-title">از یک گفت‌وگو شروع کنیم.</h2><p>این فرم نمایشی است؛ اطلاعات شما ذخیره یا ارسال نمی‌شود.</p>{sent ? <div role="status" className="form-success">پیش‌نمایش فرم تکمیل شد. در نسخه نهایی، درخواست از این مسیر ارسال خواهد شد.</div> : <form onSubmit={e=>{e.preventDefault();setSent(true);}}><label>نام شما<input required autoComplete="name" name="name" placeholder="نام و نام خانوادگی"/></label><label>ایمیل<input required type="email" autoComplete="email" name="email" placeholder="you@example.com" dir="ltr"/></label><label>موضوع گفت‌وگو<textarea required name="message" rows={3} placeholder="کمی درباره موضوع همکاری بنویسید…"/></label><button className="pill dark" type="submit">آزمایش فرم <Arrow/></button></form>}</>}</dialog></div>}
 </div>;
}
