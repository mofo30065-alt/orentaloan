import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { DiagnosticFlow } from '@/components/diagnostic/DiagnosticFlow';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'diagnostic.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function DiagnosticPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Section>
      <Container>
        <DiagnosticFlow />
      </Container>
    </Section>
  );
}
