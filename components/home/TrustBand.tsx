import { useTranslations } from 'next-intl';
import { IconShieldCheck } from '@/components/common/icons';

export function TrustBand() {
  const t = useTranslations('home.trust');
  const items = t.raw('items') as string[];

  return (
    <ul className="grid gap-md sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-sm rounded-md border border-border bg-surface p-md text-small text-text"
        >
          <IconShieldCheck className="h-5 w-5 shrink-0 text-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}
