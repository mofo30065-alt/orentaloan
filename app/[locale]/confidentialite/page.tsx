import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getCountryLegal } from '@/data/countries';
import { LegalShell } from '@/components/legal/LegalShell';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.privacy.meta' });
  return { title: t('title'), description: t('description') };
}

interface PrivacySection {
  heading: string;
  body: string;
}

export default async function ConfidentialitePage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');
  const country = getCountryLegal(locale);
  const sections = t.raw('privacy.sections') as PrivacySection[];
  const rights = t.raw('privacy.rights') as string[];

  return (
    <LegalShell title={t('privacy.title')} intro={t('privacy.intro')}>
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-h3">{section.heading}</h2>
          <p className="mt-2xs text-base text-text-muted">{section.body}</p>
        </div>
      ))}

      <div>
        <h2 className="text-h3">{t('privacy.rightsTitle')}</h2>
        <ul className="mt-md space-y-xs">
          {rights.map((right) => (
            <li key={right} className="flex items-start gap-sm">
              <span className="mt-[7px] h-2 w-2 shrink-0 rounded-pill bg-accent" />
              <span className="text-base text-text">{right}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-surface p-lg">
        <h2 className="text-h3">{t('labels.dpo')}</h2>
        <p className="mt-2xs text-base text-text-muted">{t('privacy.dpoIntro')}</p>
        <p className="mt-2xs text-base text-text">
          {country.dpo.name} — {country.dpo.email}
        </p>
      </div>
    </LegalShell>
  );
}
