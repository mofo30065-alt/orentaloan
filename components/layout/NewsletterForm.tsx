'use client';

import { useState, type FormEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'sending' | 'ok' | 'error';

/** Inscription newsletter (double opt-in) : envoie un e-mail de confirmation. */
export function NewsletterForm() {
  const t = useTranslations('common.footer.newsletter');
  const locale = useLocale();
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });
      const json = (await response.json()) as { ok?: boolean };
      if (response.ok && json.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return <p className="mt-sm text-small text-brand">{t('success')}</p>;
  }

  return (
    <form onSubmit={submit} className="mt-sm flex flex-col gap-xs sm:flex-row" aria-label={t('title')}>
      <label className="sr-only" htmlFor="footer-newsletter">
        {t('placeholder')}
      </label>
      <input
        id="footer-newsletter"
        type="email"
        name="email"
        required
        placeholder={t('placeholder')}
        className="min-h-[44px] flex-1 rounded-pill border border-border bg-bg px-md text-small text-text placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-accent"
      />
      <span aria-hidden className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </span>
      <Button type="submit" variant="brand" size="md" disabled={status === 'sending'}>
        {t('action')}
      </Button>
      {status === 'error' ? (
        <p className="mt-2xs w-full text-micro text-danger" role="alert">
          {t('error')}
        </p>
      ) : null}
    </form>
  );
}
