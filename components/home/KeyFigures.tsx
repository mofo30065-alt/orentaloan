import { useTranslations } from 'next-intl';

interface Figure {
  value: string;
  label: string;
}

export function KeyFigures() {
  const t = useTranslations('home.figures');
  const items = t.raw('items') as Figure[];

  return (
    <div>
      <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
        {items.map((figure) => (
          <div
            key={figure.label}
            className="rounded-lg border border-border bg-surface p-lg text-center"
          >
            <p className="font-display text-display leading-none tabular-nums text-brand">
              {figure.value}
            </p>
            <p className="mt-sm text-small text-text-muted">{figure.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-md text-micro text-text-muted">{t('note')}</p>
    </div>
  );
}
