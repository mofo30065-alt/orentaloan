import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { mainNav } from '@/data/navigation';
import { buttonVariants } from '@/components/ui/Button';
import { Container } from '@/components/common/Container';
import { Logo } from '@/components/common/Logo';
import { IconPhone } from '@/components/common/icons';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('common');

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-lg">
          <Link href="/" aria-label={t('brand.name')}>
            <Logo />
          </Link>

          <nav aria-label={t('nav.home')} className="hidden items-center gap-md lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-sm px-2xs py-xs text-small font-medium text-text-muted transition-colors hover:text-text"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2xs">
            <a
              href={`tel:${t('phone.number')}`}
              className="hidden min-h-[44px] items-center gap-2xs rounded-pill px-sm text-small font-medium text-text hover:bg-brand/5 sm:inline-flex"
            >
              <IconPhone className="h-4 w-4 text-brand" />
              <span>{t('phone.display')}</span>
            </a>
            <Link
              href="/demande"
              className={cn(buttonVariants({ variant: 'accent', size: 'sm' }), 'hidden sm:inline-flex')}
            >
              {t('cta.request')}
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

/** Menu mobile accessible sans JS (élément <details>). */
function MobileMenu() {
  const t = useTranslations('common');

  return (
    <details className="group lg:hidden">
      <summary
        aria-label={t('nav.home')}
        className="flex h-[44px] w-[44px] cursor-pointer list-none items-center justify-center rounded-pill text-text hover:bg-brand/5 [&::-webkit-details-marker]:hidden"
      >
        <span className="relative block h-[2px] w-5 bg-current before:absolute before:-top-[6px] before:block before:h-[2px] before:w-5 before:bg-current before:content-[''] after:absolute after:top-[6px] after:block after:h-[2px] after:w-5 after:bg-current after:content-['']" />
      </summary>
      <div className="absolute inset-x-0 top-[72px] border-b border-border bg-bg shadow-md">
        <Container>
          <nav aria-label={t('nav.home')} className="flex flex-col py-sm">
            {mainNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-sm px-2xs py-sm text-base font-medium text-text hover:bg-brand/5"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <Link
              href="/demande"
              className={cn(buttonVariants({ variant: 'accent', size: 'md' }), 'mt-sm')}
            >
              {t('cta.request')}
            </Link>
          </nav>
        </Container>
      </div>
    </details>
  );
}
