'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { monthlyPaymentCents, toCents } from '@/lib/finance';
import { formatMoneyCents, formatMoneyRounded, formatPercent } from '@/lib/format';
import { RangeField } from '@/components/simulator/RangeField';
import { AnimatedFigure } from '@/components/simulator/AnimatedFigure';
import { buttonVariants } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';
import { cn } from '@/lib/utils';

const RATE = 0.069;

export function HeroMiniSimulator() {
  const t = useTranslations('home.heroMini');
  const tUnit = useTranslations('simulator.unit');
  const locale = useLocale();
  const [amount, setAmount] = useState(15000);
  const [months, setMonths] = useState(48);

  const monthly = useMemo(() => monthlyPaymentCents(toCents(amount), RATE, months), [amount, months]);

  return (
    <div className="rounded-lg border border-border bg-surface p-lg shadow-lift">
      <p className="text-micro font-semibold uppercase tracking-wide text-text-muted">{t('title')}</p>

      <div className="mt-md space-y-md">
        <RangeField
          id="hero-amount"
          label={t('amount')}
          value={amount}
          min={1000}
          max={100000}
          step={500}
          display={formatMoneyRounded(amount, locale)}
          onChange={setAmount}
        />
        <RangeField
          id="hero-duration"
          label={t('duration')}
          value={months}
          min={6}
          max={120}
          step={6}
          display={tUnit('months', { count: months })}
          onChange={setMonths}
        />
      </div>

      <div className="mt-lg rounded-md bg-brand/5 p-md">
        <p className="text-small text-text-muted">{t('result')}</p>
        <AnimatedFigure
          valueCents={monthly}
          format={(cents) => formatMoneyCents(cents, locale)}
          className="font-display text-h1 leading-none tabular-nums text-brand"
        />
      </div>

      <p className="mt-sm text-micro text-text-muted">
        {t('rateNote', { rate: formatPercent(RATE, locale) })}
      </p>

      <Link
        href={`/simulateur?montant=${amount}&duree=${months}`}
        className={cn(buttonVariants({ variant: 'accent', size: 'md' }), 'mt-md w-full')}
      >
        {t('cta')}
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
