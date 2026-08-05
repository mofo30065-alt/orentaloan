import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { RequestForm } from '@/components/form/RequestForm';

type PageParams = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'form.meta' });
  return { title: t('title'), description: t('description') };
}

function toNumber(value: string | string[] | undefined): number | undefined {
  if (typeof value !== 'string') return undefined;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export default async function RequestPage({ params, searchParams }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('form');
  const query = await searchParams;

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-[48rem]">
          <div className="max-w-prose">
            <h1 className="text-h1">{t('title')}</h1>
            <p className="mt-md text-base text-text-muted">{t('subtitle')}</p>
          </div>
          <div className="mt-xl">
            <RequestForm
              prefillAmount={toNumber(query.montant)}
              prefillMonths={toNumber(query.duree)}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
