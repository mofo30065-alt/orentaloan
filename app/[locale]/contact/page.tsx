import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getCountryLegal } from '@/data/countries';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/common/Eyebrow';
import { ContactForm } from '@/components/contact/ContactForm';
import { IconPhone, IconWhatsApp } from '@/components/common/icons';

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function ContactPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const tw = await getTranslations({ locale, namespace: 'common.whatsapp' });
  const country = getCountryLegal(locale);
  const whatsappNumber = country.contact.whatsapp.replace(/\D/g, '');
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tw('prefill'))}`;

  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <Eyebrow>{t('title')}</Eyebrow>
          <h1 className="mt-sm text-display">{t('title')}</h1>
          <p className="mt-md text-h3 font-normal text-text-muted">{t('intro')}</p>
        </div>

        <div className="mt-xl grid gap-2xl lg:grid-cols-2">
          <div>
            <h2 className="text-h3">{t('form.title')}</h2>
            <div className="mt-lg">
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="rounded-lg border border-border bg-surface p-lg">
              <h2 className="text-h3">{t('info.title')}</h2>
              <ul className="mt-md space-y-sm text-base text-text">
                <li className="flex items-center gap-sm">
                  <IconPhone className="h-5 w-5 text-brand" />
                  <a href={`tel:${country.contact.phone}`} className="hover:text-brand">
                    {country.contact.phone}
                  </a>
                </li>
                <li>
                  <span className="text-text-muted">{t('info.email')} : </span>
                  {country.contact.email}
                </li>
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-sm rounded-pill bg-[#25D366] px-md py-xs text-small font-medium text-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    aria-label={tw('aria')}
                  >
                    <IconWhatsApp className="h-5 w-5" />
                    {tw('cta')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
