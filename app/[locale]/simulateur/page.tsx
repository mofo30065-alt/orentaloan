import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Simulator } from '@/components/simulator/Simulator';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'simulator.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function SimulatorPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('simulator');

  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <h1 className="text-h1">{t('title')}</h1>
          <p className="mt-md text-base text-text-muted">{t('subtitle')}</p>
        </div>
        <div className="mt-xl">
          <Simulator />
        </div>
      </Container>
    </Section>
  );
}
