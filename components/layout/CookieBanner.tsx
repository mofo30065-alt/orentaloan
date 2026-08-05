'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Button } from '@/components/ui/Button';

const COOKIE = 'SPARK_COOKIE_CONSENT';

function persist(value: 'all' | 'necessary') {
  document.cookie = `${COOKIE}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

/**
 * Bandeau RGPD : aucun tracker n'est chargé avant consentement, et le refus est aussi
 * simple que l'acceptation (deux boutons de même niveau, un seul clic).
 */
export function CookieBanner() {
  const t = useTranslations('common.cookies');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasChoice = document.cookie.split('; ').some((entry) => entry.startsWith(`${COOKIE}=`));
    if (!hasChoice) setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (value: 'all' | 'necessary') => {
    persist(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t('title')}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-surface shadow-lg"
    >
      <div className="mx-auto flex max-w-container flex-col gap-md px-lg py-md sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-prose text-small text-text">
          {t('message')}{' '}
          <Link href="/cookies" className="underline hover:text-brand">
            {t('link')}
          </Link>
        </p>
        <div className="flex gap-sm">
          <Button variant="outline" size="md" onClick={() => choose('necessary')}>
            {t('refuse')}
          </Button>
          <Button variant="accent" size="md" onClick={() => choose('all')}>
            {t('accept')}
          </Button>
        </div>
      </div>
    </div>
  );
}
