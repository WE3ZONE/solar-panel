// Local news cover images, keyed by news slug (slugs are shared across locales).
const newsImages: Record<string, string> = {
  "bakhtaran-plant-inauguration": "/demo-1/news/plant-inauguration.jpg",
  "grid-connection-milestone": "/demo-1/news/grid-connection.jpg",
  "energy-exchange-listing-update": "/demo-1/news/energy-exchange.jpg",
  "capacity-expansion-plan": "/demo-1/news/capacity-expansion.jpg",
  "sustainability-report": "/demo-1/news/sustainability.jpg",
  "industrial-partnership": "/demo-1/news/partnership.jpg",
};

export function newsImage(slug: string): string {
  return newsImages[slug] ?? "/demo-1/news/plant-inauguration.jpg";
}
