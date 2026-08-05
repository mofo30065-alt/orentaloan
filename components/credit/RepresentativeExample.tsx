import { useTranslations } from 'next-intl';
import { buildAmortization, computeApr } from '@/lib/finance';
import { formatMoneyCents, formatPercent } from '@/lib/format';

interface RepresentativeExampleProps {
  title: string;
  amount: number;
  months: number;
  ratePct: number;
  locale: string;
}

/**
 * Encadré d'information normalisé, alimenté par lib/finance (plus aucune valeur statique) :
 * l'exemple représentatif est recalculé à partir des paramètres du produit.
 */
export function RepresentativeExample({
  title,
  amount,
  months,
  ratePct,
  locale,
}: RepresentativeExampleProps) {
  const t = useTranslations('legal.infobox');
  const tUnit = useTranslations('simulator.unit');

  const annualRate = ratePct / 100;
  const amortization = buildAmortization({ principal: amount, annualRate, termMonths: months });
  const apr = computeApr({ principal: amount, annualRate, termMonths: months });

  const rows = [
    { label: t('amount'), value: formatMoneyCents(amortization.principalCents, locale) },
    { label: t('duration'), value: tUnit('months', { count: months }) },
    { label: t('rate'), value: formatPercent(annualRate, locale) },
    { label: t('apr'), value: formatPercent(apr, locale) },
    { label: t('monthly'), value: formatMoneyCents(amortization.monthlyPaymentCents, locale) },
    { label: t('totalCost'), value: formatMoneyCents(amortization.totalInterestCents, locale) },
    { label: t('totalDue'), value: formatMoneyCents(amortization.totalPaidCents, locale) },
  ];

  return (
    <div className="rounded-lg border border-border bg-surface p-lg shadow-sm">
      <h3 className="text-h3">{title}</h3>
      <dl className="mt-md grid grid-cols-2 gap-x-lg gap-y-md sm:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-micro uppercase tracking-wide text-text-muted">{row.label}</dt>
            <dd className="mt-2xs font-mono text-h3 tabular-nums text-text">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-md border-t border-border pt-md text-micro leading-relaxed text-text-muted">
        {t('note')}
      </p>
    </div>
  );
}
