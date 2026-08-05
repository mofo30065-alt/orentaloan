import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { buttonVariants } from '@/components/ui/Button';
import { IconShieldCheck } from '@/components/common/icons';

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
  const t = await getTranslations({ locale, namespace: 'form.confirmation.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function ConfirmationPage({ params, searchParams }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('form.confirmation');
  const query = await searchParams;
  const reference = typeof query.ref === 'string' ? query.ref : undefined;
  const steps = t.raw('whatNext') as string[];

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-[42rem]">
          <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-brand text-on-brand">
            <IconShieldCheck className="h-6 w-6" />
          </span>
          <h1 className="mt-lg text-h1">{t('title')}</h1>
          <p className="mt-md text-base text-text-muted">{t('body')}</p>

          {reference ? (
            <div className="mt-lg rounded-lg border border-border bg-surface p-lg">
              <p className="text-micro uppercase tracking-wide text-text-muted">
                {t('referenceLabel')}
              </p>
              <p className="mt-2xs font-mono text-h2 tabular-nums text-text">{reference}</p>
            </div>
          ) : null}

          <div className="mt-lg">
            <h2 className="text-h3">{t('whatNextTitle')}</h2>
            <ul className="mt-md space-y-sm">
              {steps.map((entry) => (
                <li key={entry} className="flex items-start gap-sm">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-pill bg-accent" />
                  <span className="text-base text-text">{entry}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className={`${buttonVariants({ variant: 'brand', size: 'lg' })} mt-xl`}>
            {t('ctaHome')}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
