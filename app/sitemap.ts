import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://abhishekvermaportfolio.vercel.app';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/#about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#oneview`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
