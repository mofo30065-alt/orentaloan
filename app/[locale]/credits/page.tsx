import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { classicCredits, featuredCredits } from '@/data/credits';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/common/Eyebrow';
import { IconArrowRight } from '@/components/common/icons';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'credits.meta' });
  return { title: t('title'), description: t('description') };
}

function CreditCard({ slug }: { slug: string }) {
  const t = useTranslations('credits.products');
  return (
    <Link
      href={`/credits/${slug}`}
      className="group flex flex-col rounded-lg border border-border bg-surface p-lg transition-colors hover:border-accent"
    >
      <h3 className="text-h3">{t(`${slug}.name`)}</h3>
      <p className="mt-2xs flex-1 text-small text-text-muted">{t(`${slug}.teaser`)}</p>
      <IconArrowRight className="mt-md h-5 w-5 text-brand transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export default async function CreditsIndexPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('credits.index');

  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h1 className="mt-sm text-display">{t('title')}</h1>
          <p className="mt-md text-h3 font-normal text-text-muted">{t('intro')}</p>
        </div>

        <h2 className="mt-2xl text-micro font-semibold uppercase tracking-wide text-text-muted">
          {t('featuredTitle')}
        </h2>
        <div className="mt-lg grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {featuredCredits.map((credit) => (
            <CreditCard key={credit.slug} slug={credit.slug} />
          ))}
        </div>

        <h2 className="mt-2xl text-micro font-semibold uppercase tracking-wide text-text-muted">
          {t('classicTitle')}
        </h2>
        <div className="mt-lg grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {classicCredits.map((credit) => (
            <CreditCard key={credit.slug} slug={credit.slug} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
