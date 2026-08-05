import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalShell } from '@/components/legal/LegalShell';

type PageParams = { params: Promise<{ locale: string }> };

interface OrgSection {
  heading: string;
  body: string;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common.org.about.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function AboutPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('common.org.about');
  const sections = t.raw('sections') as OrgSection[];

  return (
    <LegalShell title={t('title')} intro={t('intro')}>
      <img
        src="/images/photos/about.jpg"
        alt=""
        className="aspect-[16/9] w-full rounded-lg border border-border object-cover"
      />
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-h3">{section.heading}</h2>
          <p className="mt-2xs text-base text-text-muted">{section.body}</p>
        </div>
      ))}
    </LegalShell>
  );
}
