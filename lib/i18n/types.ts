export type NewsItem = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    news: string;
    about: string;
    contact: string;
    contactCta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaNews: string;
    ctaAbout: string;
    slides: { title: string; caption: string }[];
  };
  stats: {
    items: { value: string; unit: string; label: string }[];
  };
  exchange: {
    eyebrow: string;
    title: string;
    description: string;
    board: { label: string; value: string }[];
    priceLabel: string;
    price: string;
    currency: string;
    change: string;
    rangeLabel: string;
    todayLabel: string;
  };
  aboutPreview: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: { num: string; title: string; desc: string }[];
    cta: string;
  };
  newsPreview: {
    eyebrow: string;
    title: string;
    viewAll: string;
  };
  newsCard: { readMore: string };
  footer: {
    desc: string;
    quickLinks: string;
    contactInfo: string;
    address: string;
    phone: string;
    email: string;
    tickerTitle: string;
    tickerDesc: string;
    copyright: string;
    disclaimer: string;
  };
  newsPage: { eyebrow: string; title: string; description: string };
  newsDetail: { back: string };
  aboutPage: {
    eyebrow: string;
    title: string;
    description: string;
    valuesEyebrow: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
    timelineEyebrow: string;
    timelineTitle: string;
    timeline: { year: string; text: string }[];
    statsRepeat: { value: string; label: string }[];
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    info: { label: string; value: string; dir?: "ltr" }[];
    hoursLabel: string;
    hoursValue: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      disclaimer: string;
    };
    mapPlaceholder: string;
  };
  news: NewsItem[];
};
