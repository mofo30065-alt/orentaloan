import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalShell } from '@/components/legal/LegalShell';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.cookies.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function CookiesPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal.cookies');

  const blocks = [
    { heading: t('necessaryTitle'), body: t('necessaryBody') },
    { heading: t('optionalTitle'), body: t('optionalBody') },
    { heading: t('manageTitle'), body: t('manageBody') },
  ];

  return (
    <LegalShell title={t('title')} intro={t('intro')}>
      {blocks.map((block) => (
        <div key={block.heading}>
          <h2 className="text-h3">{block.heading}</h2>
          <p className="mt-2xs text-base text-text-muted">{block.body}</p>
        </div>
      ))}
    </LegalShell>
  );
}
