import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "Tabesh Energy Gostar | Solar Power Generation & Trading",
    description:
      "Tabesh Energy Gostar generates electricity from utility-scale solar plants and trades it on the Iran Energy Exchange.",
  },
  nav: {
    home: "Home",
    news: "News",
    about: "About",
    contact: "Contact",
    contactCta: "Talk to Investor Relations",
  },
  hero: {
    eyebrow: "Solar power generation & trading",
    title: "Turning sunlight into energy you can trade on the exchange",
    description:
      "Tabesh Energy Gostar operates utility-scale solar plants across the country, generating clean electricity and supplying it to the national grid through the Iran Energy Exchange.",
    ctaNews: "See company news",
    ctaAbout: "More about the company",
    slides: [
      { title: "Bakhtaran Solar Field", caption: "Kerman — 80 MW capacity" },
      { title: "Smart Solar Trackers", caption: "Yazd — next-gen bifacial panels" },
      { title: "National Grid Connection", caption: "Isfahan — direct grid injection" },
    ],
  },
  stats: {
    items: [
      { value: "210", unit: "MW", label: "Installed capacity" },
      { value: "480", unit: "GWh", label: "Annual energy output" },
      { value: "190K", unit: "tons", label: "Carbon emissions avoided" },
      { value: "6", unit: "plants", label: "In operation" },
    ],
  },
  exchange: {
    eyebrow: "Listed on the energy exchange",
    title: "Power generation, traded directly on the Iran Energy Exchange",
    description:
      "Electricity generated at our plants, once injected into the national grid, is offered and traded under the ticker “TBSH” on the Iran Energy Exchange. Figures below are illustrative demo data, not real market data.",
    board: [
      { label: "Ticker", value: "TBSH" },
      { label: "Trading code", value: "IRENERGY-TBSH" },
      { label: "Board", value: "Iran Energy Exchange" },
      { label: "Unit", value: "IRR / kWh" },
    ],
    priceLabel: "Live price (demo)",
    price: "48,200",
    currency: "IRR",
    change: "2.8%",
    rangeLabel: "Last 30 days",
    todayLabel: "Today",
  },
  aboutPreview: {
    eyebrow: "What we do",
    title: "From sunlight to the national grid",
    description:
      "Our plants are engineered to the latest global standards so that every kilowatt-hour reaches the grid at the highest quality and reliability.",
    pillars: [
      {
        num: "01",
        title: "Six plants in operation",
        desc: "Active across Kerman, Yazd, Isfahan and Fars provinces with a combined 210 MW capacity.",
      },
      {
        num: "02",
        title: "Solar tracking technology",
        desc: "Bifacial panels and smart tracking systems maximize yield across every season.",
      },
      {
        num: "03",
        title: "Transparency for shareholders",
        desc: "Regular production and financial reporting aligned with Iran Energy Exchange requirements.",
      },
    ],
    cta: "Learn more about us ←",
  },
  newsPreview: {
    eyebrow: "News",
    title: "Latest company updates",
    viewAll: "View all news ←",
  },
  newsCard: { readMore: "Read more ←" },
  footer: {
    desc: "Generating and supplying clean solar power nationwide, traded on the Iran Energy Exchange.",
    quickLinks: "Quick links",
    contactInfo: "Contact information",
    address: "Africa Highway, Energy Tower, 12th floor, Tehran, Iran",
    phone: "+98 21 8800 4521",
    email: "info@tabesh-energy.demo",
    tickerTitle: "Exchange ticker",
    tickerDesc: "“TBSH” on the Iran Energy Exchange\nTrading code: IRENERGY-TBSH",
    copyright: "Tabesh Energy Gostar PJSC — All rights reserved.",
    disclaimer: "This website is a demo sample; financial figures shown are not real.",
  },
  newsPage: {
    eyebrow: "News & updates",
    title: "Latest company news",
    description:
      "Plant openings, exchange-board developments, and sustainability reports from across the company.",
  },
  newsDetail: { back: "→ Back to news" },
  aboutPage: {
    eyebrow: "About us",
    title: "Developer and operator of utility-scale solar plants",
    description:
      "Tabesh Energy Gostar PJSC has designed, built, and operated solar power plants since 2017. Electricity from our plants is injected into the national grid and supplied to industrial consumers and distribution companies via the Iran Energy Exchange.",
    valuesEyebrow: "Our values",
    valuesTitle: "The principles that shape our growth",
    values: [
      {
        title: "Sustainability",
        desc: "Reducing carbon emissions and growing renewable capacity sits at the core of our strategy.",
      },
      {
        title: "Transparency",
        desc: "Regular production and financial disclosure for shareholders and exchange regulators.",
      },
      {
        title: "Reliability",
        desc: "Real-time plant monitoring to guarantee stable output and on-time grid delivery.",
      },
    ],
    timelineEyebrow: "Our journey",
    timelineTitle: "A look back at our history",
    timeline: [
      { year: "2017", text: "Company founded; feasibility studies begin for the first solar plant." },
      { year: "2019", text: "Plant No. 1 commissioned with 20 MW capacity in Kerman province." },
      { year: "2021", text: "“TBSH” ticker admitted to the Iran Energy Exchange." },
      { year: "2023", text: "Installed capacity reaches 130 MW with two new plants commissioned." },
      { year: "2025", text: "Total capacity reaches 210 MW; new development projects begin in Isfahan and Fars." },
    ],
    statsRepeat: [
      { value: "210 MW", label: "Installed capacity" },
      { value: "6", label: "Active plants" },
      { value: "4+", label: "Provinces covered" },
      { value: "2021", label: "Exchange listing" },
    ],
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Get in touch with Tabesh Energy Gostar",
    description:
      "For media inquiries, industrial partnerships, or investor relations, complete the form below or reach us directly.",
    info: [
      { label: "Head office", value: "Africa Highway, Energy Tower, 12th floor, Tehran, Iran" },
      { label: "Phone", value: "+98 21 8800 4521", dir: "ltr" },
      { label: "Media inquiries", value: "info@tabesh-energy.demo", dir: "ltr" },
      { label: "Investor relations", value: "investors@tabesh-energy.demo", dir: "ltr" },
    ],
    hoursLabel: "Business hours",
    hoursValue: "Saturday – Wednesday, 8:00 – 16:00",
    form: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      disclaimer: "This form is for demo purposes only — messages are not actually sent.",
    },
    mapPlaceholder: "Head office map (illustrative)",
  },
  news: [
    {
      slug: "bakhtaran-plant-inauguration",
      date: "2025-07-13",
      category: "Plant opening",
      title: "Phase 2 of Bakhtaran solar plant opens with 80 MW capacity",
      excerpt:
        "Phase 2 of the Bakhtaran plant was inaugurated with provincial officials and industrial partners, bringing total capacity to 210 MW.",
      body: [
        "Phase 2 of the Bakhtaran solar plant in Kerman province was commissioned after 14 months of construction, with a nameplate capacity of 80 MW.",
        "With this phase online, Tabesh Energy Gostar's total installed capacity rose to 210 MW, a meaningful contribution to the region's clean power supply.",
        "Electricity from the plant is transmitted via the national grid and offered on the Iran Energy Exchange.",
      ],
    },
    {
      slug: "grid-connection-milestone",
      date: "2025-06-01",
      category: "Grid connection",
      title: "Plant No. 4 fully connected to the national grid",
      excerpt:
        "Plant No. 4 in Yazd province completed synchronization testing and is now fully connected to the national grid.",
      body: [
        "Following completion of technical testing and frequency synchronization, the company's Plant No. 4 in Yazd province was officially connected to the national grid.",
        "With 360,000 solar panels, the plant will generate more than 90 GWh of clean energy annually.",
      ],
    },
    {
      slug: "energy-exchange-listing-update",
      date: "2025-04-25",
      category: "Energy exchange",
      title: "Daily supply quota updated on the energy exchange board",
      excerpt:
        "Following increased production capacity, the company's daily electricity supply quota on the Iran Energy Exchange was reviewed and increased.",
      body: [
        "Given the increase in active plant capacity, the board of directors revised the company's daily electricity supply quota on the Iran Energy Exchange.",
        "The change took effect at the start of summer and is expected to increase the ticker's average daily trading volume.",
      ],
    },
    {
      slug: "capacity-expansion-plan",
      date: "2025-03-09",
      category: "Capacity expansion",
      title: "Agreement signed to develop 150 MW of new capacity",
      excerpt:
        "A memorandum of understanding was signed to build two new plants with a combined 150 MW capacity in Isfahan and Fars provinces.",
      body: [
        "In a ceremony attended by senior company leadership, a memorandum of understanding was signed to build two new solar plants in Isfahan and Fars provinces.",
        "These projects, with a combined capacity of 150 MW, are expected to come online within the next two years.",
      ],
    },
    {
      slug: "sustainability-report",
      date: "2025-01-21",
      category: "Sustainability report",
      title: "2024 sustainability and carbon-reduction report released",
      excerpt:
        "The company's annual sustainability report shows its plants avoided more than 190,000 tons of CO2 emissions last year.",
      body: [
        "According to the published sustainability report, the company's plants avoided more than 190,000 tons of CO2-equivalent emissions in 2024.",
        "The report covers environmental, social, and governance (ESG) performance and has been shared with shareholders and regulators.",
      ],
    },
    {
      slug: "industrial-partnership",
      date: "2024-12-04",
      category: "Industrial partnership",
      title: "Technical partnership signed with an international equipment supplier",
      excerpt:
        "A technical cooperation and knowledge-transfer agreement was signed with an international solar equipment supplier to improve panel efficiency.",
      body: [
        "The agreement aims to transfer technical know-how and deploy next-generation solar tracking equipment.",
        "The output efficiency of the company's existing plants is expected to increase by up to 6% over the next two years.",
      ],
    },
  ],
};

export default en;
