'use client';

import { useState, type FormEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const inputClass =
  'mt-2xs w-full rounded-md border border-border bg-bg px-md py-sm text-base text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const next: Record<string, string> = {};
    if (!String(data.name ?? '').trim()) next.name = t('errors.required');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(data.email ?? ''))) next.email = t('errors.email');
    if (String(data.message ?? '').trim().length < 10) next.message = t('errors.message');
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
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
    return (
      <p className="rounded-lg border border-brand/20 bg-brand/5 p-lg text-base text-brand">
        {t('form.success')}
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="relative space-y-md">
      <div>
        <label htmlFor="contact-name" className="text-small font-medium text-text">
          {t('form.name')}
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          className={cn(inputClass, errors.name && 'border-danger')}
        />
        {errors.name ? (
          <p className="mt-2xs text-micro text-danger" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="text-small font-medium text-text">
          {t('form.email')}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          className={cn(inputClass, errors.email && 'border-danger')}
        />
        {errors.email ? (
          <p className="mt-2xs text-micro text-danger" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-subject" className="text-small font-medium text-text">
          {t('form.subject')}
        </label>
        <input id="contact-subject" name="subject" className={inputClass} />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-small font-medium text-text">
          {t('form.message')}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          className={cn(inputClass, errors.message && 'border-danger')}
        />
        {errors.message ? (
          <p className="mt-2xs text-micro text-danger" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div aria-hidden className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Ne pas remplir
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === 'error' ? (
        <p className="text-small text-danger" role="alert">
          {t('form.error')}
        </p>
      ) : null}

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </Button>
    </form>
  );
}
