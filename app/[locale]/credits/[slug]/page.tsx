import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { creditSlugs, getCreditBySlug } from '@/data/credits';
import { formatMoneyRounded } from '@/lib/format';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/common/Eyebrow';
import { buttonVariants } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';
import { Simulator } from '@/components/simulator/Simulator';
import { RateTable } from '@/components/credit/RateTable';
import { EligibilityBlock } from '@/components/credit/EligibilityBlock';
import { DocumentsList } from '@/components/credit/DocumentsList';
import { CreditFaq } from '@/components/credit/CreditFaq';
import { ExampleCase } from '@/components/credit/ExampleCase';
import { RepresentativeExample } from '@/components/credit/RepresentativeExample';
import { SpecialModelNote } from '@/components/credit/SpecialModelNote';

type PageParams = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return creditSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!getCreditBySlug(slug)) {
    return {};
  }
  const t = await getTranslations({ locale, namespace: `credits.products.${slug}` });
  return { title: `${t('name')} — OrentaLoan`, description: t('heroSubtitle') };
}

export default async function CreditPage({ params }: PageParams) {
  const { locale, slug } = await params;
  const product = getCreditBySlug(slug);
  if (!product) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations('credits');
  const tp = await getTranslations(`credits.products.${slug}`);
  const isAmortizing = product.model === 'amortizing';
  const { simulator } = product;

  const amountRange = t('common.range', {
    min: formatMoneyRounded(product.amountMin, locale),
    max: formatMoneyRounded(product.amountMax, locale),
  });
  const monthsRange = t('common.monthsRange', {
    min: product.durationMinMonths,
    max: product.durationMaxMonths,
  });

  return (
    <>
      {/* Hero produit */}
      <Section className="pt-lg md:pt-xl">
        <Container>
          <Link
            href="/credits"
            className="inline-flex items-center gap-2xs text-micro text-text-muted hover:text-text"
          >
            <span aria-hidden>‹</span>
            {t('index.eyebrow')}
          </Link>
          <div className="mt-lg max-w-prose">
            <Eyebrow>{t('index.eyebrow')}</Eyebrow>
            <h1 className="mt-sm text-display">{tp('name')}</h1>
            <p className="mt-md text-h3 font-normal text-text-muted">{tp('heroSubtitle')}</p>
            <div className="mt-lg flex flex-col gap-sm sm:flex-row">
              <Link
                href="/pre-diagnostic"
                className={buttonVariants({ variant: 'accent', size: 'lg' })}
              >
                {t('common.ctaDiagnostic')}
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/demande" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                {t('common.ctaRequest')}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Description + montants / durées */}
      <Section className="bg-surface">
        <Container>
          <div className="grid gap-xl lg:grid-cols-3">
            <p className="max-w-prose text-base text-text lg:col-span-2">{tp('description')}</p>
            <dl className="space-y-md">
              <div>
                <dt className="text-micro uppercase tracking-wide text-text-muted">
                  {t('common.amounts')}
                </dt>
                <dd className="mt-2xs font-mono text-h3 tabular-nums text-text">{amountRange}</dd>
              </div>
              <div>
                <dt className="text-micro uppercase tracking-wide text-text-muted">
                  {t('common.duration')}
                </dt>
                <dd className="mt-2xs font-mono text-h3 tabular-nums text-text">{monthsRange}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </Section>

      {/* Tableau des taux */}
      {product.rateTable.length > 0 ? (
        <Section>
          <Container>
            <h2 className="text-h2">{t('common.rateTableTitle')}</h2>
            <div className="mt-lg max-w-2xl">
              <RateTable rows={product.rateTable} locale={locale} />
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Simulateur pré-rempli ou note de modèle + exemple représentatif */}
      <Section className="bg-surface">
        <Container>
          <h2 className="text-h2">{t('common.simulatorTitle')}</h2>
          <div className="mt-lg">
            {isAmortizing ? (
              <>
                <Simulator
                  defaults={{
                    amount: simulator.amount,
                    months: simulator.months,
                    ratePct: simulator.ratePct,
                  }}
                  bounds={{
                    amountMin: simulator.amountMin,
                    amountMax: simulator.amountMax,
                    amountStep: simulator.amountStep,
                    monthsMin: simulator.monthsMin,
                    monthsMax: simulator.monthsMax,
                    monthsStep: simulator.monthsStep,
                  }}
                />
                <div className="mt-xl max-w-2xl">
                  <RepresentativeExample
                    title={t('common.representativeTitle')}
                    amount={simulator.amount}
                    months={simulator.months}
                    ratePct={simulator.ratePct}
                    locale={locale}
                  />
                </div>
              </>
            ) : (
              <SpecialModelNote model={product.model as 'revolving' | 'leasing' | 'bridge' | 'factoring'} />
            )}
          </div>
        </Container>
      </Section>

      {/* Éligibilité */}
      <Section>
        <Container>
          <h2 className="text-h2">{t('common.eligibilityTitle')}</h2>
          <div className="mt-lg">
            <EligibilityBlock slug={slug} />
          </div>
        </Container>
      </Section>

      {/* Documents + cas concret */}
      <Section className="bg-surface">
        <Container>
          <div className="grid gap-xl lg:grid-cols-2">
            <div>
              <h2 className="text-h2">{t('common.documentsTitle')}</h2>
              <div className="mt-lg">
                <DocumentsList slug={slug} />
              </div>
            </div>
            <div>
              <h2 className="text-h2">{t('common.casesTitle')}</h2>
              <div className="mt-lg">
                <ExampleCase slug={slug} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-h2">{t('common.faqTitle')}</h2>
            <div className="mt-lg">
              <CreditFaq slug={slug} />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA final */}
      <Section className="bg-brand text-on-brand">
        <Container>
          <div className="flex flex-col items-start gap-lg lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-[20ch] text-h1 text-on-brand">{t('common.ctaFinalTitle')}</h2>
            <Link
              href="/pre-diagnostic"
              className={`${buttonVariants({ variant: 'accent', size: 'lg' })} shrink-0`}
            >
              {t('common.ctaDiagnostic')}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
