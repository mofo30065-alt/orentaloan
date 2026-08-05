import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getCountryLegal } from '@/data/countries';
import { LegalShell } from '@/components/legal/LegalShell';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.mentions.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function MentionsLegalesPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');
  const country = getCountryLegal(locale);

  const rows = [
    { label: t('labels.editor'), value: country.lender.name },
    { label: t('labels.legalForm'), value: country.lender.legalForm },
    { label: t('labels.capital'), value: country.lender.capital },
    { label: t('labels.registration'), value: country.lender.registration },
    { label: t('labels.regulator'), value: country.lender.regulator },
    { label: t('labels.regulatoryNumber'), value: country.lender.regulatoryNumber },
    { label: t('labels.vat'), value: country.lender.vat },
    { label: t('labels.director'), value: country.publicationDirector },
    { label: t('labels.host'), value: `${country.host.name} — ${country.host.address}` },
    { label: t('labels.mediator'), value: country.mediator.name },
  ];

  return (
    <LegalShell title={t('mentions.title')} intro={t('mentions.intro')}>
      <dl className="divide-y divide-border rounded-lg border border-border">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-2xs px-lg py-md sm:grid-cols-3">
            <dt className="text-small font-medium text-text-muted">{row.label}</dt>
            <dd className="text-base text-text sm:col-span-2">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="rounded-lg border border-border bg-surface p-lg">
        <h2 className="text-h3">{t('coolingOff.title')}</h2>
        <p className="mt-2xs text-base text-text-muted">
          {t('coolingOff.body', { days: country.coolingOffDays })}
        </p>
      </div>
    </LegalShell>
  );
}
