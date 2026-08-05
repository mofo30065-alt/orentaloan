import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalShell } from '@/components/legal/LegalShell';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.cgu.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function CguPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal.cgu');

  return (
    <LegalShell title={t('title')} intro={t('intro')}>
      <p className="rounded-md border border-dashed border-border bg-surface p-lg text-base text-text-muted">
        {t('placeholder')}
      </p>
    </LegalShell>
  );
}
