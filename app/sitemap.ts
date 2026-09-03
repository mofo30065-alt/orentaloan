import type { MetadataRoute } from 'next';
import { routing } from '@/lib/i18n/routing';
import { creditSlugs } from '@/data/credits';
import { getAllSlugs } from '@/data/blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orentaloan.example';

const staticPaths = [
  '',
  '/credits',
  '/simulateur',
  '/pre-diagnostic',
  '/demande',
  '/blog',
  '/contact',
  '/a-propos',
  '/engagements',
  '/faq',
  '/mentions-legales',
  '/confidentialite',
  '/cgu',
  '/cookies',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...creditSlugs.map((slug) => `/credits/${slug}`),
    ...getAllSlugs().map((slug) => `/blog/${slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]),
      ),
    },
  }));
}
