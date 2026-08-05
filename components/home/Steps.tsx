import { useTranslations } from 'next-intl';

interface Step {
  title: string;
  desc: string;
}

/** Étapes réellement séquentielles : liste ordonnée, numéros qui encodent l'ordre. */
export function Steps() {
  const t = useTranslations('home.steps');
  const items = t.raw('items') as Step[];

  return (
    <ol className="grid gap-md sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, index) => (
        <li key={item.title} className="rounded-lg border border-border bg-surface p-lg">
          <span className="font-mono text-h2 tabular-nums text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-sm text-h3">{item.title}</h3>
          <p className="mt-2xs text-small text-text-muted">{item.desc}</p>
        </li>
      ))}
    </ol>
  );
}
