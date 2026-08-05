'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/i18n/navigation';
import { routing } from '@/lib/i18n/routing';
import { IconChevronDown } from '@/components/common/icons';

/**
 * Sélecteur de langue accessible sans JS (élément <details>).
 * Phase 1 : une seule locale (FR). La liste se remplit seule en phase 8.
 */
export function LocaleSwitcher() {
  const t = useTranslations('common.localeSwitcher');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <details className="group relative">
      <summary
        aria-label={t('label')}
        className="flex min-h-[44px] cursor-pointer list-none items-center gap-2xs rounded-pill px-sm text-small font-medium text-text hover:bg-brand/5 [&::-webkit-details-marker]:hidden"
      >
        <span className="uppercase">{locale}</span>
        <IconChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="absolute right-0 z-50 mt-2xs min-w-[10rem] rounded-md border border-border bg-surface p-2xs shadow-md">
        {routing.locales.map((loc) => (
          <li key={loc}>
            <Link
              href={pathname}
              locale={loc}
              className="block rounded-sm px-sm py-xs text-small text-text hover:bg-brand/5"
            >
              {t(loc)}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
