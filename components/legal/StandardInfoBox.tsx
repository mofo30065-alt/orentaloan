import { useTranslations } from 'next-intl';

/**
 * Encadré d'information normalisé (obligatoire sur chaque page produit et chaque
 * résultat de simulation). Chiffres en Roboto Mono tabulaire, exemple représentatif.
 * Phase 1 : valeurs indicatives issues des messages. Phase 3+ : alimenté par lib/finance.
 */
export function StandardInfoBox() {
  const t = useTranslations('legal.infobox');
  const td = useTranslations('legal.disclaimer');

  const rows = [
    { label: t('amount'), value: t('example.amount') },
    { label: t('duration'), value: t('example.duration') },
    { label: t('rate'), value: t('example.rate') },
    { label: t('apr'), value: t('example.apr') },
    { label: t('monthly'), value: t('example.monthly') },
    { label: t('totalCost'), value: t('example.totalCost') },
    { label: t('totalDue'), value: t('example.totalDue') },
  ];

  return (
    <div className="rounded-lg border border-border bg-surface p-lg shadow-sm">
      <div className="flex items-baseline justify-between gap-md">
        <h3 className="text-h3">{t('title')}</h3>
        <span className="text-micro text-text-muted">{td('indicative')}</span>
      </div>

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
