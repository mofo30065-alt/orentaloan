import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalShell } from '@/components/legal/LegalShell';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common.org.commitments.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function CommitmentsPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('common.org.commitments');
  const items = t.raw('items') as string[];

  return (
    <LegalShell title={t('title')} intro={t('intro')}>
      <ul className="space-y-sm">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-sm">
            <span className="mt-[9px] h-2 w-2 shrink-0 rounded-pill bg-accent" />
            <span className="text-base text-text">{item}</span>
          </li>
        ))}
      </ul>
    </LegalShell>
  );
}
