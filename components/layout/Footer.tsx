import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Container } from '@/components/common/Container';
import { Logo } from '@/components/common/Logo';
import { NewsletterForm } from '@/components/layout/NewsletterForm';

export function Footer() {
  const t = useTranslations('common');
  const tl = useTranslations('common.footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-xl py-section md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-sm max-w-[36ch] text-small text-text-muted">{tl('tagline')}</p>
          </div>

          <nav aria-label={tl('colLegal')} className="lg:col-span-2">
            <h2 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
              {tl('colLegal')}
            </h2>
            <ul className="mt-sm space-y-xs">
              {(
                [
                  ['mentions', '/mentions-legales'],
                  ['privacy', '/confidentialite'],
                  ['cookies', '/cookies'],
                  ['terms', '/cgu'],
                  ['faq', '/faq'],
                ] as const
              ).map(([k, href]) => (
                <li key={k}>
                  <Link href={href} className="text-small text-text hover:text-brand">
                    {tl(`legal.${k}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={tl('colCompany')} className="lg:col-span-2">
            <h2 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
              {tl('colCompany')}
            </h2>
            <ul className="mt-sm space-y-xs">
              {(
                [
                  ['about', '/a-propos'],
                  ['commitments', '/engagements'],
                  ['blog', '/blog'],
                ] as const
              ).map(([k, href]) => (
                <li key={k}>
                  <Link href={href} className="text-small text-text hover:text-brand">
                    {tl(`company.${k}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
              {tl('newsletter.title')}
            </h2>
            <p className="mt-sm text-small text-text-muted">{tl('newsletter.help')}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col gap-xs border-t border-border py-lg text-micro text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{tl('rights', { year, brand: t('brand.name') })}</p>
          <p className="max-w-[60ch]">{tl('publisher')}</p>
        </div>
      </Container>
    </footer>
  );
}
