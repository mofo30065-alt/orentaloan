import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/common/Eyebrow';
import { FaqSearch } from '@/components/faq/FaqSearch';

type PageParams = { params: Promise<{ locale: string }> };

interface FaqCategory {
  id: string;
  label: string;
  items: { q: string; a: string }[];
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function FaqPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('faq');
  const categories = t.raw('categories') as FaqCategory[];

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-[46rem]">
          <div className="max-w-prose">
            <Eyebrow>{t('title')}</Eyebrow>
            <h1 className="mt-sm text-display">{t('title')}</h1>
            <p className="mt-md text-h3 font-normal text-text-muted">{t('intro')}</p>
          </div>
          <div className="mt-xl">
            <FaqSearch
              categories={categories}
              searchLabel={t('searchLabel')}
              searchPlaceholder={t('searchPlaceholder')}
              empty={t('empty')}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
