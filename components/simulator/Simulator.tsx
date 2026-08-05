'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { buildAmortization, computeApr } from '@/lib/finance';
import { formatMoneyCents, formatMoneyRounded, formatPercent } from '@/lib/format';
import { RangeField } from '@/components/simulator/RangeField';
import { AnimatedFigure } from '@/components/simulator/AnimatedFigure';
import { CapitalInterestChart } from '@/components/simulator/CapitalInterestChart';
import { AmortizationTable } from '@/components/simulator/AmortizationTable';
import { Button, buttonVariants } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';

interface SimulatorProps {
  defaults?: Partial<{ amount: number; months: number; ratePct: number }>;
  bounds?: Partial<{
    amountMin: number;
    amountMax: number;
    amountStep: number;
    monthsMin: number;
    monthsMax: number;
    monthsStep: number;
  }>;
}

export function Simulator({ defaults, bounds }: SimulatorProps) {
  const t = useTranslations('simulator');
  const locale = useLocale();

  const amountMin = bounds?.amountMin ?? 1000;
  const amountMax = bounds?.amountMax ?? 100000;
  const amountStep = bounds?.amountStep ?? 500;
  const monthsMin = bounds?.monthsMin ?? 6;
  const monthsMax = bounds?.monthsMax ?? 120;
  const monthsStep = bounds?.monthsStep ?? 6;

  const [amount, setAmount] = useState(defaults?.amount ?? 15000);
  const [months, setMonths] = useState(defaults?.months ?? 48);
  const [ratePct, setRatePct] = useState(defaults?.ratePct ?? 6.9);
  const [downPayment, setDownPayment] = useState(0);
  const [showTable, setShowTable] = useState(false);

  const downMax = Math.max(0, amount - amountStep);
  const principal = Math.max(0, amount - downPayment);
  const annualRate = ratePct / 100;

  const result = useMemo(() => {
    if (principal <= 0 || months <= 0) {
      return null;
    }
    return {
      amort: buildAmortization({ principal, annualRate, termMonths: months }),
      apr: computeApr({ principal, annualRate, termMonths: months }),
    };
  }, [principal, annualRate, months]);

  const handleAmount = (next: number) => {
    setAmount(next);
    setDownPayment((current) => Math.min(current, Math.max(0, next - amountStep)));
  };

  const money = (cents: number) => formatMoneyCents(cents, locale);

  return (
    <div className="grid gap-xl lg:grid-cols-2">
      {/* Réglages */}
      <div className="rounded-lg border border-border bg-surface p-lg">
        <div className="space-y-lg">
          <RangeField
            id="sim-amount"
            label={t('fields.amount.label')}
            help={t('fields.amount.help')}
            value={amount}
            min={amountMin}
            max={amountMax}
            step={amountStep}
            display={formatMoneyRounded(amount, locale)}
            onChange={handleAmount}
          />
          <RangeField
            id="sim-duration"
            label={t('fields.duration.label')}
            help={t('fields.duration.help')}
            value={months}
            min={monthsMin}
            max={monthsMax}
            step={monthsStep}
            display={t('unit.months', { count: months })}
            onChange={setMonths}
          />
          <RangeField
            id="sim-rate"
            label={t('fields.rate.label')}
            help={t('fields.rate.help')}
            value={ratePct}
            min={0.5}
            max={19.5}
            step={0.1}
            display={formatPercent(ratePct / 100, locale)}
            onChange={setRatePct}
          />
          <RangeField
            id="sim-down"
            label={t('fields.downPayment.label')}
            help={t('fields.downPayment.help')}
            value={downPayment}
            min={0}
            max={downMax}
            step={amountStep}
            display={formatMoneyRounded(downPayment, locale)}
            onChange={setDownPayment}
          />
        </div>
      </div>

      {/* Résultats (encadré normalisé de la simulation) */}
      <div className="rounded-lg border border-border bg-surface p-lg shadow-sm">
        <h2 className="text-h3">{t('results.heading')}</h2>

        {result ? (
          <>
            <div className="mt-md">
              <p className="text-small text-text-muted">{t('results.monthly')}</p>
              <AnimatedFigure
                valueCents={result.amort.monthlyPaymentCents}
                format={money}
                className="font-display text-display leading-none tabular-nums text-brand"
              />
            </div>

            <p className="sr-only" aria-live="polite">
              {t('results.monthlyAria', { value: money(result.amort.monthlyPaymentCents) })}
            </p>

            <dl className="mt-lg grid grid-cols-3 gap-md">
              <ResultStat label={t('results.apr')} value={formatPercent(result.apr, locale)} />
              <ResultStat
                label={t('results.totalCost')}
                value={money(result.amort.totalInterestCents)}
              />
              <ResultStat label={t('results.financed')} value={money(result.amort.principalCents)} />
            </dl>

            <div className="mt-lg border-t border-border pt-lg">
              <CapitalInterestChart
                principalCents={result.amort.principalCents}
                interestCents={result.amort.totalInterestCents}
                principalLabel={t('chart.principal')}
                interestLabel={t('chart.interest')}
                title={t('chart.title')}
                formatValue={money}
              />
            </div>

            <p className="mt-lg text-micro leading-relaxed text-text-muted">{t('disclaimer')}</p>

            <div className="mt-lg flex flex-col gap-sm">
              <EmailCapture params={{ montant: amount, duree: months, taux: ratePct }} />
              <Link
                href={`/demande?montant=${amount}&duree=${months}&taux=${ratePct}`}
                className={buttonVariants({ variant: 'accent', size: 'md' })}
              >
                {t('actions.continue')}
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                aria-expanded={showTable}
                onClick={() => setShowTable((open) => !open)}
              >
                {showTable ? t('table.hide') : t('table.show')}
              </Button>
            </div>
          </>
        ) : null}
      </div>

      {/* Tableau d'amortissement, pleine largeur */}
      {result && showTable ? (
        <div className="lg:col-span-2">
          <AmortizationTable
            schedule={result.amort.schedule}
            labels={{
              caption: t('table.caption'),
              period: t('table.period'),
              payment: t('table.payment'),
              principal: t('table.principal'),
              interest: t('table.interest'),
              balance: t('table.balance'),
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-micro uppercase tracking-wide text-text-muted">{label}</dt>
      <dd className="mt-2xs font-mono text-h3 tabular-nums text-text">{value}</dd>
    </div>
  );
}

function EmailCapture({ params }: { params: Record<string, number> }) {
  const t = useTranslations('simulator.actions');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/simulation-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, params, locale }),
      });
      if (response.ok) {
        setSent(true);
      }
    } catch {
      // Échec silencieux côté UI ; l'endpoint réel et sa gestion d'erreur arrivent en phase 6.
    }
  };

  if (sent) {
    return <p className="text-small text-brand">{t('emailSuccess')}</p>;
  }

  if (!open) {
    return (
      <Button variant="outline" size="md" onClick={() => setOpen(true)}>
        {t('email')}
      </Button>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-xs" aria-label={t('email')}>
      <label className="sr-only" htmlFor="sim-email">
        {t('emailPlaceholder')}
      </label>
      <div className="flex flex-col gap-xs sm:flex-row">
        <input
          id="sim-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t('emailPlaceholder')}
          className="min-h-[44px] flex-1 rounded-pill border border-border bg-bg px-md text-small text-text placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-accent"
        />
        <Button type="submit" variant="brand" size="md">
          {t('emailSubmit')}
        </Button>
      </div>
      <p className="text-micro text-text-muted">{t('emailNote')}</p>
    </form>
  );
}
