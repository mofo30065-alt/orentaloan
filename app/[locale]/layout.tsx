import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { builtLocales, routing } from '@/lib/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orentaloan.example';
import { fontDisplay, fontSans, fontMono } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { WhatsAppFab } from '@/components/common/WhatsAppFab';
import { CallFab } from '@/components/common/CallFab';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

type LayoutParams = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return builtLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });
  return {
    metadataBase: new URL(siteUrl),
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutParams & { children: ReactNode }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <html
      lang={locale}
      className={cn(fontDisplay.variable, fontSans.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-md focus:top-md focus:z-[100] focus:rounded-md focus:bg-brand focus:px-md focus:py-xs focus:text-on-brand"
          >
            {t('skipToContent')}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CallFab locale={locale} />
          <WhatsAppFab locale={locale} />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
