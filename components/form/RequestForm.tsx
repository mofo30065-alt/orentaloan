'use client';

import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from '@/lib/i18n/navigation';
import {
  buildRequestSchema,
  EMPLOYMENT,
  HOUSING,
  INCIDENT,
  MARITAL,
  PROJECT_TYPES,
  SENIORITY,
  STEP_FIELDS,
  type RequestFormValues,
} from '@/lib/validation/requestSchema';
import { CheckboxField, Honeypot, SelectField, TextField } from '@/components/form/fields';
import { ProgressBar } from '@/components/form/ProgressBar';
import { Button } from '@/components/ui/Button';

const STORAGE_KEY = 'orentaloan_demande';

export function RequestForm({
  prefillAmount,
  prefillMonths,
}: {
  prefillAmount?: number;
  prefillMonths?: number;
}) {
  const t = useTranslations('form');
  const locale = useLocale();
  const router = useRouter();
  const schema = useMemo(() => buildRequestSchema((key, values) => t(key, values)), [t]);

  const [step, setStep] = useState(0);
  const [submitError, setSubmitError] = useState(false);
  const [restored, setRestored] = useState(false);

  const form = useForm<RequestFormValues>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      amount: prefillAmount ?? 15000,
      durationMonths: prefillMonths ?? 48,
      dependents: 0,
      profession: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postalCode: '',
      city: '',
      consent: false,
      website: '',
    },
  });

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  // Restauration de la session (une seule fois).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        reset({ ...form.getValues(), ...JSON.parse(saved) });
      }
    } catch {
      // stockage indisponible : on ignore.
    }
    setRestored(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = watch();

  // Sauvegarde de la session à chaque changement, une fois la restauration faite.
  useEffect(() => {
    if (!restored) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {
      // stockage indisponible : on ignore.
    }
  }, [values, restored]);

  const total = STEP_FIELDS.length;

  const goNext = async () => {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid) setStep((current) => Math.min(total - 1, current + 1));
  };
  const goBack = () => setStep((current) => Math.max(0, current - 1));

  const clearSaved = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    reset();
    setStep(0);
  };

  const onSubmit = async (data: RequestFormValues) => {
    setSubmitError(false);
    try {
      const response = await fetch('/api/demande', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });
      const json = (await response.json()) as { ok?: boolean; reference?: string };
      if (response.ok && json.ok) {
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {
          // ignore
        }
        router.push(`/demande/confirmation?ref=${encodeURIComponent(json.reference ?? '')}`);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  };

  const fieldError = (name: keyof RequestFormValues): string | undefined =>
    errors[name]?.message as string | undefined;

  const optionsFor = (field: string, list: readonly string[]) =>
    list.map((value) => ({ value, label: t(`options.${field}.${value}`) }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <ProgressBar current={step + 1} total={total} label={t('progress', { current: step + 1, total })} />
      <p className="mt-sm text-micro text-text-muted">{t('savedNote')}</p>

      <div className="mt-lg rounded-lg border border-border bg-surface p-lg">
        {step === 0 ? (
          <div className="space-y-lg">
            <h2 className="text-h3">{t('steps.project')}</h2>
            <SelectField
              id="projectType"
              label={t('fields.projectType')}
              placeholder={t('fields.select')}
              error={fieldError('projectType')}
              options={optionsFor('projectType', PROJECT_TYPES)}
              registration={register('projectType')}
            />
            <TextField
              id="amount"
              label={t('fields.amount')}
              type="number"
              inputMode="numeric"
              error={fieldError('amount')}
              registration={register('amount', { valueAsNumber: true })}
            />
            <TextField
              id="durationMonths"
              label={t('fields.durationMonths')}
              type="number"
              inputMode="numeric"
              error={fieldError('durationMonths')}
              registration={register('durationMonths', { valueAsNumber: true })}
            />
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-lg">
            <h2 className="text-h3">{t('steps.personal')}</h2>
            <SelectField
              id="maritalStatus"
              label={t('fields.maritalStatus')}
              placeholder={t('fields.select')}
              error={fieldError('maritalStatus')}
              options={optionsFor('maritalStatus', MARITAL)}
              registration={register('maritalStatus')}
            />
            <TextField
              id="dependents"
              label={t('fields.dependents')}
              type="number"
              inputMode="numeric"
              error={fieldError('dependents')}
              registration={register('dependents', { valueAsNumber: true })}
            />
            <SelectField
              id="housingStatus"
              label={t('fields.housingStatus')}
              placeholder={t('fields.select')}
              error={fieldError('housingStatus')}
              options={optionsFor('housingStatus', HOUSING)}
              registration={register('housingStatus')}
            />
            <TextField
              id="monthlyIncome"
              label={t('fields.monthlyIncome')}
              type="number"
              inputMode="numeric"
              error={fieldError('monthlyIncome')}
              registration={register('monthlyIncome', { valueAsNumber: true })}
            />
            <TextField
              id="monthlyCharges"
              label={t('fields.monthlyCharges')}
              type="number"
              inputMode="numeric"
              error={fieldError('monthlyCharges')}
              registration={register('monthlyCharges', { valueAsNumber: true })}
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-lg">
            <h2 className="text-h3">{t('steps.professional')}</h2>
            <SelectField
              id="employmentStatus"
              label={t('fields.employmentStatus')}
              placeholder={t('fields.select')}
              error={fieldError('employmentStatus')}
              options={optionsFor('employmentStatus', EMPLOYMENT)}
              registration={register('employmentStatus')}
            />
            <SelectField
              id="seniority"
              label={t('fields.seniority')}
              placeholder={t('fields.select')}
              error={fieldError('seniority')}
              options={optionsFor('seniority', SENIORITY)}
              registration={register('seniority')}
            />
            <TextField
              id="profession"
              label={t('fields.profession')}
              error={fieldError('profession')}
              registration={register('profession')}
            />
            <SelectField
              id="incident"
              label={t('fields.incident')}
              placeholder={t('fields.select')}
              error={fieldError('incident')}
              options={optionsFor('incident', INCIDENT)}
              registration={register('incident')}
            />
          </div>
        ) : null}

        {step === 3 ? (
          <div className="grid gap-lg sm:grid-cols-2">
            <h2 className="text-h3 sm:col-span-2">{t('steps.contact')}</h2>
            <TextField
              id="firstName"
              label={t('fields.firstName')}
              autoComplete="given-name"
              error={fieldError('firstName')}
              registration={register('firstName')}
            />
            <TextField
              id="lastName"
              label={t('fields.lastName')}
              autoComplete="family-name"
              error={fieldError('lastName')}
              registration={register('lastName')}
            />
            <TextField
              id="email"
              label={t('fields.email')}
              type="email"
              inputMode="email"
              autoComplete="email"
              error={fieldError('email')}
              registration={register('email')}
            />
            <TextField
              id="phone"
              label={t('fields.phone')}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              error={fieldError('phone')}
              registration={register('phone')}
            />
            <TextField
              id="postalCode"
              label={t('fields.postalCode')}
              autoComplete="postal-code"
              error={fieldError('postalCode')}
              registration={register('postalCode')}
            />
            <TextField
              id="city"
              label={t('fields.city')}
              autoComplete="address-level2"
              error={fieldError('city')}
              registration={register('city')}
            />
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-lg">
            <h2 className="text-h3">{t('summary.title')}</h2>
            <dl className="grid gap-x-lg gap-y-md sm:grid-cols-2">
              <SummaryRow label={t('fields.projectType')} value={values.projectType ? t(`options.projectType.${values.projectType}`) : '—'} />
              <SummaryRow label={t('fields.amount')} value={`${values.amount} €`} />
              <SummaryRow label={t('fields.durationMonths')} value={`${values.durationMonths}`} />
              <SummaryRow label={t('fields.housingStatus')} value={values.housingStatus ? t(`options.housingStatus.${values.housingStatus}`) : '—'} />
              <SummaryRow label={t('fields.monthlyIncome')} value={`${values.monthlyIncome} €`} />
              <SummaryRow label={t('fields.monthlyCharges')} value={`${values.monthlyCharges} €`} />
              <SummaryRow label={t('fields.employmentStatus')} value={values.employmentStatus ? t(`options.employmentStatus.${values.employmentStatus}`) : '—'} />
              <SummaryRow label={t('fields.incident')} value={values.incident ? t(`options.incident.${values.incident}`) : '—'} />
              <SummaryRow label={t('fields.firstName')} value={`${values.firstName} ${values.lastName}`} />
              <SummaryRow label={t('fields.email')} value={values.email || '—'} />
            </dl>

            <CheckboxField
              id="consent"
              label={t('consent.label')}
              error={fieldError('consent')}
              registration={register('consent')}
            />
            <Honeypot registration={register('website')} />
          </div>
        ) : null}
      </div>

      {submitError ? (
        <p className="mt-sm text-small text-danger" role="alert">
          {t('submitError')}
        </p>
      ) : null}

      <div className="mt-lg flex items-center justify-between gap-sm">
        <div className="flex gap-sm">
          <Button type="button" variant="ghost" onClick={goBack} disabled={step === 0}>
            {t('actions.back')}
          </Button>
          {restored ? (
            <Button type="button" variant="ghost" onClick={clearSaved}>
              {t('clearSaved')}
            </Button>
          ) : null}
        </div>
        {step < total - 1 ? (
          <Button type="button" onClick={goNext}>
            {t('actions.next')}
          </Button>
        ) : (
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('actions.sending') : t('actions.submit')}
          </Button>
        )}
      </div>
    </form>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-micro uppercase tracking-wide text-text-muted">{label}</dt>
      <dd className="mt-2xs text-base text-text">{value}</dd>
    </div>
  );
}
