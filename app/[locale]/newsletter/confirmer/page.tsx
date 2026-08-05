import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { verifyEmail } from '@/lib/newsletter';
import { sendAdminNewsletterConfirmed } from '@/lib/email';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/common/Eyebrow';

type PageParams = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ email?: string; token?: string }>;
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common.footer.newsletter' });
  return { title: `${t('confirmTitle')} — Spark loan`, robots: { index: false } };
}

export default async function NewsletterConfirmPage({ params, searchParams }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('common.footer.newsletter');
  const { email, token } = await searchParams;

  const valid = Boolean(email && token && verifyEmail(email, token));
  if (valid && email) {
    await sendAdminNewsletterConfirmed(email, locale);
  }

  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <Eyebrow>{t('title')}</Eyebrow>
          <h1 className="mt-sm text-display">{valid ? t('confirmTitle') : t('confirmError')}</h1>
          {valid ? (
            <p className="mt-md text-h3 font-normal text-text-muted">{t('confirmBody')}</p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
