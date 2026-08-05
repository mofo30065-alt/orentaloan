import { useTranslations } from 'next-intl';
import type { RateTier } from '@/data/credits';
import { formatPercent } from '@/lib/format';

export function RateTable({ rows, locale }: { rows: RateTier[]; locale: string }) {
  const t = useTranslations('credits.common');
  const tUnit = useTranslations('simulator.unit');
  const hasVariable = rows.some((row) => row.variableRate !== undefined);

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-small">
        <thead>
          <tr className="border-b border-border bg-surface text-micro uppercase tracking-wide text-text-muted">
            <th scope="col" className="px-md py-sm text-left font-semibold">
              {t('rateDuration')}
            </th>
            <th scope="col" className="px-md py-sm text-right font-semibold">
              {t('rateFixed')}
            </th>
            {hasVariable ? (
              <th scope="col" className="px-md py-sm text-right font-semibold">
                {t('rateVariable')}
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="font-mono tabular-nums">
          {rows.map((row) => (
            <tr key={row.months} className="border-b border-border/60 last:border-0">
              <td className="px-md py-sm text-left text-text-muted">
                {tUnit('months', { count: row.months })}
              </td>
              <td className="px-md py-sm text-right text-text">
                {formatPercent(row.fixedRate, locale)}
              </td>
              {hasVariable ? (
                <td className="px-md py-sm text-right text-text">
                  {row.variableRate !== undefined ? formatPercent(row.variableRate, locale) : '—'}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-border px-md py-sm text-micro text-text-muted">{t('rateNote')}</p>
    </div>
  );
}
